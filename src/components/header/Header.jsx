import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import GameDropdown from '../settings/game/GameDropdown'
import LanguageDropdown from '../settings/language/LanguageDropdown'
import ModeDropdown from '../settings/mode/ModeDropdown'
import Title from './Title'


export default function Header({ setCurrentLanguage, currentGame, setCurrentGame, setCurrentMode, currentLanguage, currentMode }) {

    const [showDropdowns, setShowDropdowns] = useState(true)


    const PLUS_EMOJI = '➕'
    

    const toggleDropdowns = () => {
        setShowDropdowns(!showDropdowns)
    }

    useEffect(() => {
        if (currentGame && currentLanguage && currentMode) { setShowDropdowns(false) }
        else { setShowDropdowns(true) }
    }, [currentGame, currentLanguage, currentMode])


    function renderStateDescription() {
        if (currentGame && currentLanguage && currentMode) {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center'}} >
                    <button className="btn btn-ínfo" className="btn btn-info" onClick={toggleDropdowns}>Settings {PLUS_EMOJI}</button>
                    
                </div>
            )
        }
        else {
            return <div></div>
        }
    }


    return (
        <div className="my-4" style={{ display: 'flex', flexDirection: 'column' , alignItems: 'center' }}>
            <Title />

            {!showDropdowns
                ? renderStateDescription()
                : <div style={{ display: 'flex', flexDirection: 'column' }}>
                <GameDropdown setCurrentLanguage={setCurrentLanguage} currentGame={currentGame} setCurrentGame={setCurrentGame} />
                <LanguageDropdown setCurrentLanguage={setCurrentLanguage} currentGame={currentGame} currentLanguage={currentLanguage} />
                <ModeDropdown currentGame={currentGame} setCurrentMode={setCurrentMode} currentLanguage={currentLanguage}></ModeDropdown>
            </div>}

        </div>
    )

}
