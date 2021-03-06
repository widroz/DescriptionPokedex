import { React, useState, useEffect } from 'react'
import Description from '../modes/description/Description';
import Soon from '../modes/soon/Soon';

export default function Searcher({ result, setResult, currentMode, currentGame, currentLanguage }) {

    const [temporalSearch, setTemporalSearch] = useState('');
    const [search, setSearch] = useState('');

    const SEARCH_EMOJI = '🔍';

    const handleChange = (e) => {
        setTemporalSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        if (currentMode !== 'About... 👀') {
            e.preventDefault();
            setSearch(temporalSearch.toLowerCase());
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
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

                ? <form className="search-input" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" id="search" placeholder="Search" value={temporalSearch} onChange={handleChange} onKeyPress={handleKeyPress} />
                    <button type="submit" className="btn" onClick={handleSubmit}>{SEARCH_EMOJI}</button>
                </form>

                : <></>}

            <div>
                {renderSwitchMode()}
            </div>

        </div>
    )

}
