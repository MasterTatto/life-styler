import React from 'react';
import s from './styles.module.css'
import Main from "./page/main";
import Club from "./page/club";
import Advantages from "./page/advantages";
import Price from "./page/price";
import Review from "./page/review";
import Curator from "./page/curator";
import News from "./page/news";

const Landing = () => {
    return (
        <>
            <div className={s.main} id={'main'}>
                <Main/>
            </div>
            <div className={s.main_2}>
                <Club/>
            </div>
            <div className={s.main_3} id={'advantages'}>
                <Advantages/>
            </div>
            <div className={s.main_4} id={'price'}>
                <Price/>
            </div>
            <div className={s.main_5} id={'review'}>
                <Review/>
            </div>
            <div className={s.main_6} id={'curator'}>
                <Curator/>
            </div>
            <div className={s.main_7} id={'news'}>
                <News/>
            </div>
        </>
    );
};

export default Landing;
