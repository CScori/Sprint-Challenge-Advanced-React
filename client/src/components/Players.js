import React, { useState } from 'react'
import styled from 'styled-components'
import {UseDarkMode} from './UseDarkMode'



const Btn = styled.button`
color: #000000;
background: #000000;
width: 30px;
height: 15px;
padding-left: 20px;
border-radius: 25px;

`


const Players = () => {
    const [darkMode, setDarkMode] = UseDarkMode()
    const changeMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode__dark">
            Choose Your Color
            <Btn
                onClick={changeMode}
                className={darkMode ? 'dark darked' : 'dark'}
            />
            
        </div>
    )
}

export default Players
