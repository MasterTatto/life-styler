import './App.css';
import Landing from "./page/landing";
import Header from "./components/header";
import Footer from "./components/footer";
import {useMediaQuery} from "@mui/material";
import {createContext, useEffect, useState} from "react";
import Auth from "./components/auth";
import useLocalStorage from "use-local-storage";
import Router from "./routers/router";
import {useNavigate, useLocation} from "react-router-dom";
import classNames from "classnames";

export const AuthContext = createContext(null)

function App() {
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useLocalStorage('token', '')

    const {pathname} = useLocation()
    const isAuthAndNotLanding = (isAuth && pathname !== '/')

    // useEffect(() => {
    //     if (!isAuth) {
    //         navigate('/')
    //     }
    // }, [isAuth])

    return (
        <AuthContext.Provider value={{
            setIsAuth: (value) => setIsAuth(value),
            isAuth: isAuth
        }}>
            <div className={classNames("App")}>
                <Router/>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
