import React, { createContext, useContext, useState, useReducer } from "react";

import { Reducer } from "./Reducer";

const StateContext = createContext();

const initialState = {
  cart: false,
  help: false,
  settings: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  /* Reducers */
  const [state, dispatch] = useReducer(Reducer, {
    cart: [],
  });

  /* States */
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("#Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [items, setItems] = useState([]);
  // const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
        items,
        setItems,
        // cart,
        // setCart,
        cartTotal, 
        setCartTotal,
        state, dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
