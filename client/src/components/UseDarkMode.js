import React, { useEffect, useState } from 'react'

export const UseDarkMode = () => {
    const [value, setValue] = useState("darkMode", false);

    useEffect(() => {
        const body = window.document.body;
        if (value) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }, [value])




    return [value, setValue]
};