import React from 'react';
import s from './styles.module.css'
import Main from "./page/main";
import Club from "./page/club";
import Advantages from "./page/advantages";
import Price from "./page/price";
import Review from "../../assetss/svg/review";
import Curator from "./page/curator";

const Landing = () => {
    return (
        <>
            <div className={s.main}>
                <Main/>
            </div>
            <div className={s.main_2}>
                <Club/>
            </div>
            <div className={s.main_3}>
                <Advantages/>
            </div>
            <div className={s.main_4}>
                <Price/>
            </div>
            <div className={s.main_5}>
                <Review/>
            </div>
            <div className={s.main_6}>
                <Curator/>
            </div>
        </>
    );
};

export default Landing;
