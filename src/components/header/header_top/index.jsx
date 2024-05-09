import React, {useContext, useState} from 'react';
import s from "./styles.module.css";
import Button from "../../../common/button";
import {ReactComponent as Icon1} from "../../../assetss/svg/header/youtube.svg";
import {ReactComponent as Icon2} from "../../../assetss/svg/header/vk.svg";
import {ReactComponent as Icon3} from "../../../assetss/svg/header/tg.svg";
import {ReactComponent as Icon4} from "../../../assetss/svg/header/smm.svg";
import {ReactComponent as Icon5} from "../../../assetss/svg/header/chat.svg";
import Auth from "../../auth";
import {AuthContext} from "../../../App";
import classNames from "classnames";

const header_top = [
    {title: 'Youtube', icon: <Icon1/>},
    {title: 'Vkontakte', icon: <Icon2/>},
    {title: 'Telegram', icon: <Icon3/>},
    {title: 'SMM', icon: <Icon4/>},
    {title: 'Chat', icon: <Icon5/>},
]
const HeaderTop = ({isAuthAndNotLanding}) => {
    const [openModal, setOpenModal] = useState(false)
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <div className={s.header_top}>
            {openModal && <Auth open={openModal} handleClose={() => setOpenModal(false)}/>}
            <div className={s.header_top_left}>
                {header_top?.map((el, i) => {
                    return <div
                        className={classNames(s.header_top_left_item, isAuthAndNotLanding && s.dark_header_top_left_item)}>
                        {el.icon}
                        <p>{el.title}</p>
                    </div>
                })}
            </div>

            <div className={s.btns}>
                <Button className={s.btn}>{isAuth ? 'Кабинет' : 'Регистрация'}</Button>
                <Button variant={2} className={classNames(s.btn, isAuthAndNotLanding && s.dark_btn)} onClick={() => {
                    if (isAuth) {
                        setIsAuth('')
                    } else {
                        setOpenModal(true)
                    }
                }}>
                    {isAuth ? 'выйти' : 'войти'}
                </Button>
            </div>
        </div>
    );
};

export default HeaderTop;
