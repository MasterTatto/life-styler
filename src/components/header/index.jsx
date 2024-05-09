import React, {useContext, useEffect, useState} from 'react';
import s from './styles.module.css'
import Container from "../container";
import HeaderTop from "./header_top";
import HeaderBottom from "./header_bottom";
import classNames from "classnames";
import {useMediaQuery} from "@mui/material";
import {AuthContext} from "../../App";
import {useLocation} from "react-router-dom";


const Header = () => {
    const matches = useMediaQuery('(max-width:768px)');
    const {isAuth} = useContext(AuthContext)
    const {pathname} = useLocation()
    const [isTop, setIsTop] = useState(true)

    const isAuthAndNotLanding = (isAuth && pathname !== '/')

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.target.scrollingElement.scrollTop > 100) {
                setIsTop(false)
            } else {
                setIsTop(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div
            className={classNames(s.contain, (!isTop && pathname === '/') && s.contain_v2, (isAuth && pathname !== '/') && s.isAuth_header)}>
            {!matches && <Container>
                <HeaderTop isAuthAndNotLanding={isAuthAndNotLanding}/>
                <div className={classNames(s.line, isAuthAndNotLanding && s.dark_line)}/>
                <HeaderBottom isAuthAndNotLanding={isAuthAndNotLanding}/>
            </Container>}
        </div>
    );
};

export default Header;
