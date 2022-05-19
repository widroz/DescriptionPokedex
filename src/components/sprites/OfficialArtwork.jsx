import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function OfficialArtwork({result}) {
    
    const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    const END_URL = ".png"
    const [currentURL, setCurrentURL] = useState('');

    useEffect(() => {
        if (result.id !== '') {
            setCurrentURL(BASE_URL + result + END_URL);
        }
    }, [result]);
    
    return (
        <img src={currentURL} alt="Official artwork" />
    )
}
