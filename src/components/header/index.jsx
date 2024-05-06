import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import Container from "../container";
import HeaderTop from "./header_top";
import HeaderBottom from "./header_bottom";
import classNames from "classnames";
import {useMediaQuery} from "@mui/material";


const Header = () => {
    const matches = useMediaQuery('(max-width:768px)');

    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.target.scrollingElement.scrollTop > 100) {
                setIsTop(false)
            } else {
                // if (!isTop) return
                setIsTop(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={classNames(s.contain, !isTop && s.contain_v2)}>
            {!matches && <Container>
                <HeaderTop/>
                <div className={s.line}/>
                <HeaderBottom/>
            </Container>}
        </div>
    );
};

export default Header;
