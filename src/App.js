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
import bgtop from './assetss/landing/bg_top.png'
import bgbottom from './assetss/landing/bg_bottom.png'

export const AuthContext = createContext(null)

function App() {
    const navigate = useNavigate()
    const matches = useMediaQuery('(max-width:768px)');
    const [isAuth, setIsAuth] = useLocalStorage('token', '')

    const {pathname} = useLocation()
    const isAuthAndNotLanding = (isAuth && pathname !== '/')

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])
    return (
        <AuthContext.Provider value={{
            setIsAuth: (value) => setIsAuth(value),
            isAuth: isAuth
        }}>
            <div className={classNames("App", isAuthAndNotLanding && 'app_bg')}>
                {isAuthAndNotLanding && <img className={'bgtop'} src={bgtop} alt=""/>}
                {isAuthAndNotLanding && <img className={'bgbottom'} src={bgbottom} alt=""/>}
                <Header/>
                <Router/>
                <Footer isAuthAndNotLanding={isAuthAndNotLanding}/>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
