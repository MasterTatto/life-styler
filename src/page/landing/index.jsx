import React from 'react';
import s from './styles.module.css'
import Main from "./page/main";

const Landing = () => {
    return (
        <>
            <div className={s.main}>
                <Main/>
            </div>
        </>
    );
};

export default Landing;
