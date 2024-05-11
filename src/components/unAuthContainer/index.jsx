import React, {createContext, useContext, useState} from 'react';
import Header from "../header";
import Footer from "../footer";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../App";

export const ActiveLinkContext = createContext(null)

const UnAuthContainer = ({children}) => {
    const {setIsAuth, isAuth} = useContext(AuthContext)

    const [selectedLink, setSelectedLink] = useState(1);
    console.log(isAuth)
    if (isAuth) {
        return <Navigate to={'/lk'}/>
    }
    return (
        <ActiveLinkContext.Provider value={{
            setSelectedLink: setSelectedLink,
            selectedLink: selectedLink
        }}>
            <Header/>
            {children}
            <Footer/>
        </ActiveLinkContext.Provider>
    );
};

export default UnAuthContainer;
