import React from 'react';
import s from "./styles.module.css";
import Button from "../../../common/button";
import {ReactComponent as Icon1} from "../../../assetss/svg/header/youtube.svg";
import {ReactComponent as Icon2} from "../../../assetss/svg/header/vk.svg";
import {ReactComponent as Icon3} from "../../../assetss/svg/header/tg.svg";
import {ReactComponent as Icon4} from "../../../assetss/svg/header/smm.svg";
import {ReactComponent as Icon5} from "../../../assetss/svg/header/chat.svg";

const header_top = [
    {title: 'Youtube', icon: <Icon1/>},
    {title: 'Vkontakte', icon: <Icon2/>},
    {title: 'Telegram', icon: <Icon3/>},
    {title: 'SMM', icon: <Icon4/>},
    {title: 'Chat', icon: <Icon5/>},
]
const HeaderTop = () => {
    return (
        <div className={s.header_top}>
            <div className={s.header_top_left}>
                {header_top?.map((el, i) => {
                    return <div className={s.header_top_left_item}>
                        {el.icon}
                        <p>{el.title}</p>
                    </div>
                })}
            </div>

            <div className={s.btns}>
                <Button className={s.btn}>Регистрация</Button>
                <Button variant={2} className={s.btn}>войти</Button>
            </div>
        </div>
    );
};

export default HeaderTop;
