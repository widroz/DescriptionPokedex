import React from 'react'
import { dropdownWhite } from '../../style/DropdownStyles'


export default function ModeDropdown({setCurrentMode, currentLanguage, currentGame}) {

    //emoji of change mode
    const MODE_EMOJI = '🔄'
    

    const modeList = [
        'Description 📖',
        'About'
    ]

    const handleChange = (e) => {
        setCurrentMode(e.target.value)
    }



    return (
        <div>{currentLanguage && currentGame
            ?<select style={{width:'300px'}} className={dropdownWhite} onChange={handleChange}>
                <option value="">Select a search mode {MODE_EMOJI}</option>
                {modeList.map((mode, index) => {
                    return <option key={index} value={mode}>{mode}</option>
                }
                )}
            </select>
            :<div></div>}
        </div>
    )

}
