import React, { useState } from 'react'


const Players = () => {
    const [darkMode, setDarkMode] = useState()
    const changeMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode__dark">
            Choose Your Color
            <button
                onClick={changeMode}
                className={darkMode ? 'dark darked' : 'dark'}
            />
            
        </div>
    )
}

export default Players
