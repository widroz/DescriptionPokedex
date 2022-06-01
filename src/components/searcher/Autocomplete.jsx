import React from 'react'
import { useHits } from 'react-instantsearch-hooks'
export default function Autocomplete({ handleSelection }) {
    const { hits } = useHits();
    const BASE_URL_ICONS = "https://img.pokemondb.net/sprites/sword-shield/icon/"


    function renderHits() {
        let result = [];
        for (let i = 0; i < hits.length; i++) {
            if(i>4) break;
            const hit = hits[i];
            result.push(<div className="element-autocomplete" key={i} onClick={() => handleSelection(hit.name)}>
                <img className="poke-icon" src={BASE_URL_ICONS + hit.name.toLowerCase() + ".png" } alt={hit.name} />
                <b>{hit.name.charAt(0).toUpperCase() + hit.name.slice(1)}</b>
            </div>)
        }
        return result;
    }

    return (
        <div className="autocomplete">
            <div className="arrow-icon">.  .  .</div>{renderHits()}
        </div>
    )
}
