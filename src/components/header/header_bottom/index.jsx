import React, {useContext, useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
import logo from '../../../assetss/logo.png'
import logoDark from '../../../assetss/logo_footer.png'
import classNames from "classnames";
import Text from "../../../common/text";
import {Button, Popover} from "@mui/material";
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import {ReactComponent as ArrowIcon} from "../../../assetss/svg/arrow_lang.svg";
import {ActiveLinkContext} from "../../unAuthContainer";

const authNav = [
    {title: 'Главная', link: '/'},
    {title: 'Курсы', link: '/course'},
    {title: 'Мастер-классы', link: '/master-class'},
    {title: 'Медиа', link: '/media'},
    {title: 'Мотивация', link: '/motivation'},
    {title: 'Статья', link: '/dont-know'},
    {title: 'Поддержка', link: '/support'},
]

export const scroll = (id) => {
    const section = document.querySelector(`#${id}`);
    const offset = (id === 'curator') ? 95 : 130
    window.scrollTo(0, section.offsetTop - offset);
};

const HeaderBottom = () => {
    const {setSelectedLink, selectedLink} = useContext(ActiveLinkContext)
    const [lang, setLang] = useState('Рус')

    const handleNavLinkClick = (index) => {
        setSelectedLink(index);
    };


    return (
        <div className={s.content}>
            <div className={s.content_left}>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                </div>

                <div>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => {
                            return <>
                                <div  {...bindTrigger(popupState)}>
                                    <div className={classNames(s.arrow_box, popupState.isOpen && s.arrow_box_rotate)}>
                                        <Text type={'p12'}
                                              className={classNames(s.lang)}>
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
                <React.Fragment>
                    <Text type={'p16'} onClick={() => {
                        handleNavLinkClick(1)
                        scroll('main')
                    }}
                          className={classNames('link1', s.link, selectedLink === 1 && s.active)}
                    >О нас</Text>
                    <Text type={'p16'} onClick={() => {
                        handleNavLinkClick(2)
                        scroll('advantages')
                    }}
                          className={classNames('link2', s.link, selectedLink === 2 && s.active)}
                    >преимущества</Text>
                    <Text type={'p16'} onClick={() => {
                        handleNavLinkClick(3)
                        scroll('price')
                    }}
                          className={classNames('link3', s.link, selectedLink === 3 && s.active)}
                    >цены</Text>
                    <Text type={'p16'} onClick={() => {
                        handleNavLinkClick(4)
                        scroll('review')
                    }}
                          className={classNames('link4', s.link, selectedLink === 4 && s.active)}
                    >отзывы</Text>
                    <Text type={'p16'} onClick={() => {
                        handleNavLinkClick(5)
                        scroll('curator')
                    }}
                          className={classNames('link5', s.link, selectedLink === 5 && s.active)}
                    >ваш куратор</Text>
                    <Text type={'p16'} onClick={() => {
                        handleNavLinkClick(6)
                        scroll('news')
                    }}
                          className={classNames('link6', s.link, selectedLink === 6 && s.active)}
                    >новости</Text>
                </React.Fragment>
            </div>
        </div>
    );
};

export default HeaderBottom;
