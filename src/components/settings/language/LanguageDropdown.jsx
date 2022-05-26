import { useEffect, useState, React } from 'react';
import { dropdownDark } from '../../style/DropdownStyles';
import { removeAfterSpace, showLanguageWithEmoji } from './LanguageUtils';

export default function LanguageDropdown({ currentGame, setCurrentLanguage }) {

  const WORLD_EMOJI = '🌏'

  const [languageList, setLanguageList] = useState([]);

  function getLanguageList() {
    //If currentGame is X or Y, get the language list. Else, set the language list to ['en'] (English).

    if (removeAfterSpace(currentGame.toLowerCase()) === 'x' || removeAfterSpace(currentGame.toLowerCase()) === 'y') {
      fetch(`https://pokeapi.co/api/v2/version/${(removeAfterSpace(currentGame)).toLowerCase()}/`)
        .then(response => response.json())
        .then(data => {
          let languageList = [];
          data.names.forEach(element => {
            languageList.push(element.language.name);
          });
          setLanguageList(languageList);

        })
    } else {

      if (currentGame !== '') {
        setLanguageList(['en']);
      }
    }
  }

  useEffect(() => {
    getLanguageList()
  }, [currentGame]);

  return (
    <div >{currentGame === 'X ❌' || currentGame === 'Y ✅'
      ?
      <select style={{ width: '300px' }} className={dropdownDark} onChange={(e) => setCurrentLanguage(e.target.value)}>
        <option hidden>Choose a language {WORLD_EMOJI}</option>
        {languageList.map((language, index) => {
          return <option key={index} value={language}>{showLanguageWithEmoji(language)}</option>
        }
        )}
      </select>
      : <div></div>

    }
    </div>
  )

}
