import React, {useContext} from 'react';
import s from './styles.module.css'
import Main from "./page/main";
import Club from "./page/club";
import Advantages from "./page/advantages";
import Price from "./page/price";
import Review from "./page/review";
import Curator from "./page/curator";
import News from "./page/news";
import {InView, useInView} from "react-intersection-observer";
import {ActiveLinkContext} from "../../components/unAuthContainer";

const Landing = () => {
    // IntersectionObserver
    const {setSelectedLink, selectedLink} = useContext(ActiveLinkContext)

    return (
        <>
            <InView threshold={0.5} onChange={(inView) => {
                if (inView) setSelectedLink(1)
            }}>
                {({ref}) => {
                    return (
                        <div style={{width: '100%'}}>
                            <div className={s.main} id={'main'} ref={ref}>
                                <Main/>
                            </div>
                            <div className={s.main_2} ref={ref}>
                                <Club/>
                            </div>
                        </div>

                    )
                }}
            </InView>

            <InView threshold={0.5} onChange={(inView) => {
                if (inView) setSelectedLink(2)
            }}>
                {({ref}) => {
                    return (
                        <div ref={ref} className={s.main_3} id={'advantages'}>
                            <Advantages/>
                        </div>
                    )
                }}
            </InView>
            <InView threshold={0.5} onChange={(inView) => {
                if (inView) setSelectedLink(3)
            }}>
                {({ref}) => {
                    return (
                        <div ref={ref} className={s.main_4} id={'price'}>
                            <Price/>
                        </div>
                    )
                }}
            </InView>

            <InView threshold={0.5} onChange={(inView) => {
                if (inView) setSelectedLink(4)
            }}>
                {({ref}) => {
                    return (
                        <div ref={ref} className={s.main_5} id={'review'}>
                            <Review/>
                        </div>
                    )
                }}
            </InView>

            <InView threshold={0.9} onChange={(inView) => {
                if (inView) setSelectedLink(5)
            }}>
                {({ref}) => {
                    return (
                        <div ref={ref} className={s.main_6} id={'curator'}>
                            <Curator/>
                        </div>
                    )
                }}
            </InView>

            <InView threshold={0.5} onChange={(inView) => {
                if (inView) setSelectedLink(6)
            }}>
                {({ref}) => {
                    return (
                        <div ref={ref} className={s.main_7} id={'news'}>
                            <News/>
                        </div>
                    )
                }}
            </InView>
        </>
    );
};

export default Landing;
