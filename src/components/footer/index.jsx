import React, {useEffect, useRef, useState} from 'react';
import Container from "../container";
import s from './styles.module.css'
import Text from "../../common/text";
import {ReactComponent as Icon1} from "../../assetss/svg/curator/icon1.svg";
import {ReactComponent as Icon2} from "../../assetss/svg/curator/icon2.svg";
import {ReactComponent as Icon3} from "../../assetss/svg/curator/icon3.svg";
import logo from '../../assetss/logo_footer.png'
import classNames from "classnames";
import {ReactComponent as Icon4} from "../../assetss/svg/header/smm.svg";
import {ReactComponent as Icon5} from "../../assetss/svg/header/chat.svg";
import {ReactComponent as Icon6} from "../../assetss/svg/header/tg.svg";
import {ReactComponent as Icon7} from "../../assetss/svg/header/vk.svg";
import {ReactComponent as Icon8} from "../../assetss/svg/header/youtube.svg";

const header_top = [
    {title: 'Youtube', icon: <Icon8/>},
    {title: 'Vkontakte', icon: <Icon7/>},
    {title: 'Telegram', icon: <Icon6/>},
    {title: 'SMM', icon: <Icon4/>},
    {title: 'Chat', icon: <Icon5/>},
]
const Footer = () => {
    const [selectedLink, setSelectedLink] = useState(1);
    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);
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
    //     const offset = getOffset(selectedLink || 1);
    //     const added = (((selectedLink - 1) * 20))
    //
    //     lineRef.current.style.transform = `translateX(${selectedLink === 1 ? offset : (offset + added)}px)`;
    //     setLineWidth(getNavLinkWidth(selectedLink || 1) - (selectedLink === 1 ? 40 : 40));
    // };
    //
    //
    // useEffect(() => {
    //     moveLine()
    // }, [selectedLink]);

    return (
        <div className={s.main}>
            <Container>
                <div className={s.content}>
                    <div className={s.left_content_wrapper}>
                        <div className={s.left_content}>
                            <div className={s.logo}>
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className={s.left_content_bottom}>
                                <div className={s.left_content_bottom_item}>
                                    <Icon1/>
                                    <Text type={'p14'}>
                                        admin@lfstlr.com
                                    </Text>
                                </div>
                                <div className={s.left_content_bottom_item}>
                                    <Icon2/>
                                    <Text type={'p14'}>s
                                        8 (495) 999-99-99
                                    </Text>
                                </div>
                                <div className={s.left_content_bottom_item}>
                                    <Icon3/>
                                    <Text type={'p14'}>
                                        lfstlr
                                    </Text>
                                </div>

                            </div>
                        </div>
                        <div className={classNames(s.right_content_top, s.right_content_top_mobile)}>
                            {/*<div ref={lineRef} className={s.line}*/}
                            {/*     style={{width: lineWidth}}*/}
                            {/*/>*/}
                            <Text type={'p16'} onClick={() => handleNavLinkClick(1)}
                                  style={{marginLeft: '0px'}}
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


                    <div className={s.right_content}>
                        <div className={classNames(s.right_content_top, s.right_content_top_hidden)}>
                            {/*<div ref={lineRef} className={s.line}*/}
                            {/*     style={{width: lineWidth}}*/}
                            {/*/>*/}
                            <Text type={'p16'} onClick={() => handleNavLinkClick(1)}
                                  style={{marginLeft: '0px'}}
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
                        <div className={s.right_content_middle}>
                            <Text type={'p14'} className={s.politic}>
                                Политика конфеденциальности
                            </Text>

                            <div className={s.icons}>
                                {header_top?.map((el, i) => {
                                    return <React.Fragment key={i}>
                                        {el.icon}
                                    </React.Fragment>
                                })}
                            </div>
                        </div>
                        <div className={s.right_content_bottom}>
                            <Text type={'p16'}>
                                Life$tyler © 2022
                            </Text>

                            <Text type={'p14'} className={s.politic}>
                                Публичная оферта
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
