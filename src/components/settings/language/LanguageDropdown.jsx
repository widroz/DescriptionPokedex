import { useEffect,useState, React } from 'react';
import {  dropdownWhite } from '../../style/DropdownStyles';
import { removeAfterSpace } from './LanguageUtils';

export default function LanguageDropdown({currentGame, setCurrentLanguage}) {

    const WORLD_EMOJI='🌏'  

    const [languageList, setLanguageList] = useState([]);

    function getLanguageList() {
      if(removeAfterSpace(currentGame.toLowerCase()) === 'x' || removeAfterSpace(currentGame.toLowerCase()) === 'y' ) {
        fetch(`https://pokeapi.co/api/v2/version/${(removeAfterSpace(currentGame)).toLowerCase()}/`)
        .then(response => response.json())
        .then(data => {
          let languageList = [];
          data.names.forEach(element => {
            languageList.push(element.language.name);
          });
          setLanguageList(languageList);
  
        })
        } else{
  
          if(currentGame !== ''){
            setLanguageList(['en']);
          }
        }
    }


    useEffect(() => {
      getLanguageList()
    }, [currentGame]);  

    return (
      <div >{currentGame
      ?
      <select style={{width:'300px'}} className={dropdownWhite} onChange={(e) => setCurrentLanguage(e.target.value)}>
      <option value="">Choose a language {WORLD_EMOJI}</option>
        {languageList.map((language, index) => {
          return <option key={index} value={language}>{language}</option>
        }
        )}
      </select>
      :<div></div>

      }
      </div>
    )

}
