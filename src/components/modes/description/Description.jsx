import { React, useEffect, useState } from 'react'
import { removeAfterSpace } from '../../settings/language/LanguageUtils'


export default function Description({ specie, currentLanguage, currentGame, search }) {

  const [currentDescription, setCurrentDescription] = useState('')
  const [officialArtworkURL, setOfficialArtworkURL] = useState('')

  const BASE_ARTWORK_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const ARTWORK_EXTENSION = ".png"
  const CRYING_EMOJI = '😭'

  function replaceBadChars(str) {
    //In first generation games, this special character should be replaced by a space.
    return str.replace("", ' ');
  }

  function getDescription() {
    if (currentLanguage && currentGame && specie) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/` + specie.name)
        .then(response => response.json())
        .then(data => {
          let flavorText = data.flavor_text_entries.find(flavor => flavor.language.name === currentLanguage && flavor.version.name === removeAfterSpace(currentGame).toLowerCase());
          if (flavorText) {
            setCurrentDescription(replaceBadChars(flavorText.flavor_text));
            console.log(flavorText.flavor_text);
          }
          else {
            setCurrentDescription(specie.name.charAt(0).toUpperCase() + specie.name.slice(1) + " has no description in Pokémon " + removeAfterSpace(currentGame) + " " + CRYING_EMOJI);
          }
        }
        )
        .catch(error => console.log(error));
    }
    else {
      setCurrentDescription('Could not find a Pokémon called ' + search);
    }
  }

  useEffect(() => {
    //Each time language, game, specie or search changes, get the description and official artwork.
    getDescription();
    setOfficialArtworkURL(BASE_ARTWORK_URL + specie.id + ARTWORK_EXTENSION)
  }, [currentLanguage, currentGame, specie, search])


  return (
    <div>
      {currentDescription && officialArtworkURL && specie
        ? <div className="description-div">

          <img className="my-2" src={officialArtworkURL} alt={specie.name} style={{ maxWidth: '60%' }} />

          <div style={{ maxWidth: '70%' }}>
            <p>{currentDescription}</p>
            <figcaption className="blockquote-footer">
              {specie.name.toUpperCase()},
              <cite title="Source Title"> Pokémon {removeAfterSpace(currentGame)} ({currentLanguage.toUpperCase()})</cite>
            </figcaption>
          </div>

        </div>


        : search === ""
          ? <p></p>
          : <p  className="description-not-found my-4 mx-4">{currentDescription}</p>

      }</div>
  )
}


