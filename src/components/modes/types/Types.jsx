import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Types({ search, specie }) {

    const [currentTypes, setCurrentTypes] = useState([]);
    const [pastTypes, setPastTypes] = useState([]);
    const [pastTypesLastGeneration, setPastTypesLastGeneration] = useState("generation-viii");
    const BASE_URL_ICONS = "https://img.pokemondb.net/sprites/sword-shield/icon/"

    async function exists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status === 402) return true;
        else return false
    }
    useEffect(() => {
        if (specie) {
            setCurrentTypes([]);
            setPastTypes([]);
            setPastTypesLastGeneration("generation-viii");
            specie.types.forEach(type => {
                setCurrentTypes(currentTypes => [...currentTypes, type.type.name]);
                console.log("CURRENT TYPE:", type.type.name);
            }
            )

        }
    }, [specie]);


    //A const which renders the current types
    const renderCurrentTypes = () => {
        return currentTypes.map((type, index) => {
            const source = "/types/" + type + ".svg";
            console.log("SOURCE:", source);
            return (
                <div className="type">

                    <img className="type-icon" src={process.env.PUBLIC_URL + source} alt="Pokémon type"></img>
                    <p>{type}</p>
                </div>
            )
        })
    }

    //A const which renders the past types
    const renderPastTypes = () => {
        return pastTypes.map((type, index) => {
            return (
                <div key={index}>
                    <p>{type}</p>
                </div>
            )
        })
    }

    return (
        <>{specie
            ? <div className="type-mode-div">
                <div className="types-title">
                    <img alt="poke icon" src={BASE_URL_ICONS + specie.name + ".png"}></img>
                    <div className="pokemon-name-title">
                        {specie.name}
                    </div>
                    <img alt="poke icon" src={BASE_URL_ICONS + specie.name + ".png"}></img>
                </div>
                <div className="types-div">
                    {renderCurrentTypes()}
                </div>
            </div>
            : <></>
        }</>
    )
}
