import React, {useState} from 'react';
import s from './styles.module.css'
import logo from '../../../assetss/logo.png'
import {Avatar, Popover} from "@mui/material";
import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import classNames from "classnames";
import Text from "../../../common/text";
import {ReactComponent as ArrowIcon} from "../../../assetss/svg/arrow_lang.svg";
import ItemNavigate from "./item";
import {ReactComponent as Icon1} from "../../../assetss/svg/navigate/icon1.svg";
import {ReactComponent as Icon2} from "../../../assetss/svg/navigate/icon2.svg";
import {ReactComponent as Icon3} from "../../../assetss/svg/navigate/icon3.svg";
import {ReactComponent as Icon4} from "../../../assetss/svg/navigate/icon4.svg";
import {ReactComponent as Icon5} from "../../../assetss/svg/navigate/icon5.svg";
import {ReactComponent as Icon6} from "../../../assetss/svg/navigate/icon6.svg";
import {ReactComponent as Icon7} from "../../../assetss/svg/navigate/icon7.svg";
import {ReactComponent as Icon8} from "../../../assetss/svg/navigate/icon8.svg";
import {ReactComponent as Icon9} from "../../../assetss/svg/navigate/icon9.svg";
import {ReactComponent as Icon10} from "../../../assetss/svg/navigate/icon10.svg";
import {ReactComponent as Icon11} from "../../../assetss/svg/navigate/icon11.svg";

const navigate = [
    {
        title: 'Личный кабинет', link: '/lk', icon: <Icon1/>,
    },
    {
        title: 'Партнерские программы', icon: <Icon2/>, data: [
            {title: 'Life Styler', link: '/lk'},
            {title: 'Life Elite', link: '/lk'},
            {title: 'Life Silver', link: '/lk'},
            {title: 'Life Gold', link: '/lk'},
        ]
    },
    {
        title: 'Управление финансами', link: '/lk', icon: <Icon3/>,
    },
    {
        title: 'Обучение', icon: <Icon4/>, data: [
            {title: 'Курсы', link: 'course'},
            {title: 'Мастер классы', link: 'master-class'},
            {title: 'Книги, фильмы, музыка', link: 'media'},
            {title: 'Мотивация', link: 'motivation'},
            {title: 'Полезные статьи', link: 'article'},
            {title: 'Полезные программы', link: 'service'},
        ]
    },
    {
        title: 'Новости', link: 'news', icon: <Icon5/>,
    },
    {
        title: 'Контакты', link: 'contact', icon: <Icon6/>,
    },
    {
        title: 'Сообщения', link: '/lk', icon: <Icon7/>,
    },
    {
        title: 'Отзывы', link: 'review', icon: <Icon8/>,
    },
    // {
    //     title: 'Реклама', link: '/lk', icon: <Icon9/>,
    // },
    // {
    //     title: 'Фонды и лотереи', icon: <Icon10/>, data: [
    //         {title: 'Фонды', link: '/lk'},
    //         {title: 'Лотереи', link: '/lk'},
    //     ]
    // },
    {
        title: 'Настройки кабинета', icon: <Icon11/>, data: [
            {title: 'Профиль', link: '/lk'},
            {title: 'Пароль', link: '/lk'},
            {title: 'Емейл', link: '/lk'},
            {title: 'Лендинг', link: '/lk'},
        ]
    },
]

const NavigatePanel = () => {
    const [lang, setLang] = useState('Рус')

    return (
        <div className={s.navigate}>
            <div className={s.header}>
                <Avatar src={logo} sx={{width: '115px', height: 'auto', borderRadius: '0'}}/>
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

            <div className={s.content}>
                {navigate?.map((el, i) => {
                    return <ItemNavigate key={i} {...el}/>
                })}
            </div>
        </div>
    );
};

export default NavigatePanel;
