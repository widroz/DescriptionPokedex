import { React } from 'react'
import GameDropdown from '../settings/game/GameDropdown'
import LanguageDropdown from '../settings/language/LanguageDropdown'
import ModeDropdown from '../settings/mode/ModeDropdown'
import Title from './Title'


export default function Header({ setCurrentLanguage, currentGame, setCurrentGame, setCurrentMode, currentLanguage, currentMode }) {

    return (
        <div className="my-3 header">
            <Title />
            <GameDropdown setCurrentLanguage={setCurrentLanguage} currentGame={currentGame} setCurrentGame={setCurrentGame} />
            <LanguageDropdown setCurrentLanguage={setCurrentLanguage} currentGame={currentGame} currentLanguage={currentLanguage} />
            <ModeDropdown currentGame={currentGame} setCurrentMode={setCurrentMode} currentLanguage={currentLanguage}></ModeDropdown>
        </div>
    )

}
