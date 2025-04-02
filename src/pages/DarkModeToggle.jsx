import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check the saved theme in localStorage and set the initial state
        const savedTheme = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedTheme);
        document.body.classList.toggle('dark-mode', savedTheme); // Add dark-mode class to the body
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode); // Save the theme preference in localStorage
        document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle dark-mode class
    };

    return (
        <button onClick={toggleDarkMode} className='text-red-400'>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
