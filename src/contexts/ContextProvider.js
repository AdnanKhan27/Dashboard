import React, { createContext, useContext, useState } from "react";
 
const StateContext = createContext();

const initialState = {
    help: false,
    setting: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)

    return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);