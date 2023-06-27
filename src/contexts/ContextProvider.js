import React, { createContext, useContext, useState } from 'react';

import mapConfig from "../config.json";

const StateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(500);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const [center, setCenter] = useState(mapConfig.center);
    const [zoom, setZoom] = useState(9);
    const [showLayer1, setShowLayer1] = useState(true);
    const [showLayer2, setShowLayer2] = useState(true);
    const [showMarker, setShowMarker] = useState(false);
    const [features, setFeatures] = useState("");

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });


    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, 
            currentColor, currentMode, themeSettings, setThemeSettings, setMode, setColor, center, setCenter, zoom, setZoom,
            showLayer1, setShowLayer1, showLayer2, setShowLayer2, showMarker, setShowMarker, features, setFeatures }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
