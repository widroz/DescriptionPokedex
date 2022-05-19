import React from 'react'
import { dropdownWhite } from '../../style/DropdownStyles'
import { POKEMON_GAME_LIST } from './GameUtils'


export default function GameDropdown({setCurrentGame}) {

    const GAME_EMOJI = '🎮'   

    const handleChange = (e) => {
        setCurrentGame(e.target.value)
    }
    
    return (
            <select style={{width:'300px'}} className={dropdownWhite} onChange={handleChange} >
                <option value="">First, select a game {GAME_EMOJI}</option>
                {POKEMON_GAME_LIST.map((game, index) => {
                    return <option key={index} value={game}>{game}</option>
                }
                )}
            </select>
    )

}
