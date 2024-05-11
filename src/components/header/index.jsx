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
    const {pathname} = useLocation()
    const [isTop, setIsTop] = useState(true)

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
            className={classNames(s.contain, (!isTop && pathname === '/') && s.contain_v2)}>
            {!matches && <Container>
                <HeaderTop/>
                <div className={classNames(s.line)}/>
                <HeaderBottom/>
            </Container>}
        </div>
    );
};

export default Header;
