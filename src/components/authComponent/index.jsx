import React, {useContext} from 'react';
import s from './styles.module.css'
import {AuthContext} from "../../App";
import {Navigate, Outlet} from "react-router-dom";
import Header from "./header";
import NavigatePanel from "./navigate";

const AuthComponent = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    console.log(isAuth)
    if (!isAuth) {
        return <Navigate to={'/'}/>
    }
    return (
        <div className={s.main}>
            <NavigatePanel/>

            <div className={s.content_header}>
                <Header/>
                <div className={s.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AuthComponent;
