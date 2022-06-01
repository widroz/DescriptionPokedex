import { useRef } from 'react';
import { React, useState, useEffect } from 'react'
import Description from '../modes/description/Description';
import Soon from '../modes/soon/Soon';
import { getWord } from './getWord';
import { useSearchBox } from 'react-instantsearch-hooks';
import Autocomplete from './Autocomplete';

export default function Searcher({ result, setResult, currentMode, currentGame, currentLanguage }) {

    const [temporalSearch, setTemporalSearch] = useState('');
    const [search, setSearch] = useState('');
    const [showAutoComplete, setShowAutoComplete] = useState(false);
    const SEARCH_EMOJI = '🔍';
    const inputRef = useRef();
    const {refine} = useSearchBox()

    const handleChange = (e) => {
        setTemporalSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        if (currentMode !== 'About... 👀') {
            e.preventDefault();
            setSearch(temporalSearch.toLowerCase());
        }
    }

    const handleKeyUp = () => {
        const { value, selectionEnd = 0 } = inputRef.current;
        const { word } = getWord(value, selectionEnd);
        const shouldOpenAutocomplete = word.length > 0;
        setShowAutoComplete(shouldOpenAutocomplete);
        shouldOpenAutocomplete && refine(word);
    }

    const handleSelection = (word) => {
        setSearch(word);
        setShowAutoComplete(false);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
            showAutoComplete(false)
        }
    }

    function getResult() {
        if (currentMode === "Description 📖") {

            if (search !== '') {
                fetch(`https://pokeapi.co/api/v2/pokemon-species/` + search)
                    .then(response => response.json())
                    .then(data => {
                        setResult(data)
                    }
                    )
                    .catch(error => { console.log("Invalid search"); setResult("") });
            }
        }

    }

    useEffect(() => {
        getResult()
    }, [search]);

    function renderSwitchMode() {
        //Gets the current mode and renders the corresponding component.
        switch (currentMode) {
            case 'Description 📖':
                return <Description search={search} specie={result} currentLanguage={currentLanguage} currentGame={currentGame} />
            case 'About':
                return <Soon></Soon>
            default:
                return <></>
        }
    }

    return (
        <div className="search-div">
            {currentGame && currentLanguage && currentMode && currentMode !== 'About' 

                ? <div><form className="search-input" onSubmit={handleSubmit}>

                    <input ref={inputRef} type="text" className="form-control" id="search" placeholder="Search" value={temporalSearch} onChange={handleChange} onKeyPress={handleKeyPress} onKeyUp={handleKeyUp}/>
                    <button type="submit" className="btn" onClick={handleSubmit}>{SEARCH_EMOJI}</button>
                </form>
                {showAutoComplete
                &&<Autocomplete handleSelection={handleSelection}></Autocomplete>
                }
                </div>
                
                
                : <></>}

            <div>
                {renderSwitchMode()}
            </div>

        </div>
    )

}
