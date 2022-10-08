import React,{createContext, useContext, useState} from "react";

const StateContext =createContext();

const initalState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider =({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsCliked] = useState(initialState);
    
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});

    }

    return (
        <StateContext.Provider
        value ={{
            activeMenu,
            setActiveMenu,
            isClicked, setIsCliked
            
        }}
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);