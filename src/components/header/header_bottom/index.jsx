import React, {useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
import logo from '../../../assetss/logo.png'
import classNames from "classnames";
import Text from "../../../common/text";
import {Button, Popover} from "@mui/material";
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import {ReactComponent as ArrowIcon} from "../../../assetss/svg/arrow_lang.svg";

const HeaderBottom = () => {
    const [selectedLink, setSelectedLink] = useState(1);
    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);
    const [lang, setLang] = useState('Рус')

    const handleNavLinkClick = (index) => {
        setSelectedLink(index);
    };

    // const getNavLinkWidth = (index) => {
    //     const navLink = document.querySelector(`.link${index}`);
    //     return navLink?.offsetWidth;
    // };
    //
    // const getOffset = (index) => {
    //     let offset = 0;
    //     for (let i = 1; i < index; i++) {
    //         offset += getNavLinkWidth(i);
    //     }
    //     return offset;
    // };
    //
    //
    // const moveLine = () => {
    //     console.log(selectedLink)
    //     const offset = getOffset(selectedLink || 1);
    //
    //     lineRef.current.style.transform = `translateX(${offset + 40}px)`;
    //     setLineWidth(getNavLinkWidth(selectedLink || 1) - 40);
    // };
    //
    //
    // useEffect(() => {
    //     moveLine()
    // }, [selectedLink]);

    return (
        <div className={s.content}>
            <div className={s.content_left}>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                </div>

                <div>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => {
                            console.log(popupState)
                            return <>
                                <div  {...bindTrigger(popupState)}>
                                    <div className={classNames(s.arrow_box, popupState.isOpen && s.arrow_box_rotate)}>
                                        <Text type={'p12'} className={s.lang}>
                                            {lang}
                                        </Text>

                                        <ArrowIcon/>
                                    </div>
                                </div>
                                <Popover
                                    sx={{
                                        '& .MuiPaper-root': {
                                            // background: 'red',
                                            marginTop: '12px',
                                        }

                                    }}
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Text type={'p16'} onClick={() => {
                                        setLang('Рус')
                                        popupState.close()
                                    }} className={classNames(s.choose_lang, lang === 'Рус' && s.choose_lang_active)}>
                                        Рус
                                    </Text>
                                    <Text type={'p16'} onClick={() => {
                                        setLang('Англ')
                                        popupState.close()
                                    }} className={classNames(s.choose_lang, lang === 'Англ' && s.choose_lang_active)}>
                                        Англ
                                    </Text>
                                </Popover>
                            </>
                        }}
                    </PopupState>

                </div>
            </div>

            <div className={s.content_ritgh}>
                {/*<div ref={lineRef} className={s.line}*/}
                {/*     style={{width: lineWidth}}*/}
                {/*/>*/}
                <Text type={'p16'} onClick={() => handleNavLinkClick(1)}
                      className={classNames('link1', s.link, selectedLink === 1 && s.active)}
                >О нас</Text>
                <Text type={'p16'} onClick={() => handleNavLinkClick(2)}
                      className={classNames('link2', s.link, selectedLink === 2 && s.active)}
                >преимущества</Text>
                <Text type={'p16'} onClick={() => handleNavLinkClick(3)}
                      className={classNames('link3', s.link, selectedLink === 3 && s.active)}
                >цены</Text>
                <Text type={'p16'} onClick={() => handleNavLinkClick(4)}
                      className={classNames('link4', s.link, selectedLink === 4 && s.active)}
                >отзывы</Text>
                <Text type={'p16'} onClick={() => handleNavLinkClick(5)}
                      className={classNames('link5', s.link, selectedLink === 5 && s.active)}
                >ваш куратор</Text>
                <Text type={'p16'} onClick={() => handleNavLinkClick(6)}
                      className={classNames('link6', s.link, selectedLink === 6 && s.active)}
                >новости</Text>
            </div>
        </div>
    );
};

export default HeaderBottom;
