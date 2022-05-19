import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { removeAfterSpace } from '../../settings/language/LanguageUtils';

export default function Sprites({currentGame, specie }) {

    
    const [spriteList, setSpriteList] = useState();
    const [versionGroup, setVersionGroup] = useState();
    const [generation, setGeneration] = useState();

    function getCurrentVersionGroup() {
      if (currentGame) {
        fetch(`https://pokeapi.co/api/v2/version/${removeAfterSpace(currentGame.toLowerCase())}`)
          .then(response => response.json())
          .then(data => {
            setVersionGroup(data.version_group.name);
          })
          .catch(error => console.log("Could not find the version group of the game " + currentGame));
      }
    }
      
    function getCurrentGeneration() {
      if (versionGroup) {
        fetch(`https://pokeapi.co/api/v2/version-group/${versionGroup}`)
          .then(response => response.json())
          .then(data => {
            setGeneration(data.generation.name);
          })
          .catch(error => console.log("Could not find the generation of the version group " + versionGroup));
      }
    }

    useEffect(() => {
      if(currentGame)getCurrentVersionGroup();
    }, [currentGame])

    useEffect(() => {
      if(versionGroup)getCurrentGeneration();
    }, [versionGroup])
      


    
  //Map sprites
    return (
    <div>{versionGroup && generation && specie
      ? spriteList.map(sprite => {
        return (
          <img src={sprite.image} alt={sprite.version_group.name}></img>
        )
      })
      : <div>Loading...</div>
    }</div>
      
      
  )
}
