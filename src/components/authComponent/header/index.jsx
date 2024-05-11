import React, {useContext} from 'react';
import s from './styles.module.css'
import Button from "../../../common/button";
import {AuthContext} from "../../../App";
import {ReactComponent as Icon1} from "../../../assetss/svg/header/youtube.svg";
import {ReactComponent as Icon2} from "../../../assetss/svg/header/vk.svg";
import {ReactComponent as Icon3} from "../../../assetss/svg/header/tg.svg";
import {ReactComponent as Icon4} from "../../../assetss/svg/header/smm.svg";
import {ReactComponent as Icon5} from "../../../assetss/svg/header/chat.svg";
import {ReactComponent as Chat} from "../../../assetss/svg/chat.svg";
import {ReactComponent as Setting} from "../../../assetss/svg/setting.svg";
import {ReactComponent as Purse} from "../../../assetss/svg/purse.svg";
import classNames from "classnames";

const header_top = [
    {title: 'Youtube', icon: <Icon1/>},
    {title: 'Vkontakte', icon: <Icon2/>},
    {title: 'Telegram', icon: <Icon3/>},
    {title: 'SMM', icon: <Icon4/>},
    {title: 'Chat', icon: <Icon5/>},
]

const Header = () => {
    const {setIsAuth} = useContext(AuthContext)
    return (
        <div className={s.header}>
            <div className={s.links}>
                {header_top?.map((el, i) => {
                    return <div key={i} className={s.link_item}>
                        {el.icon}
                        <p>{el.title}</p>
                    </div>
                })}
            </div>

            <div className={s.action}>
                <div className={classNames(s.link_item,s.link_item_action)}>
                    <Chat/>
                    <p>Сообщения</p>
                </div>
                <div className={classNames(s.link_item,s.link_item_action)}>
                    <Setting/>
                    <p>Настройки</p>
                </div>
                <div className={classNames(s.link_item,s.link_item_action)}>
                    <Purse/>
                    <p>Управление счетом</p>
                </div>
            </div>


            <Button className={s.btn} onClick={() => setIsAuth('')} variant={2}>
                Выйти
            </Button>
        </div>
    );
};

export default Header;
