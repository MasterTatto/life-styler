import React from 'react';
import s from './styles.module.css'
import Container from "../container";
import HeaderTop from "./header_top";
import HeaderBottom from "./header_bottom";


const Header = () => {
    return (
        <div className={s.contain}>
            <Container>
                <HeaderTop/>
                <div className={s.line}/>
                <HeaderBottom/>
            </Container>
        </div>
    );
};

export default Header;
