import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import {ReactComponent as MailIcon} from "../../assetss/svg/curator/icon1.svg";
import {ReactComponent as MobileIcon} from "../../assetss/svg/curator/icon2.svg";
import {ReactComponent as TgIcon} from "../../assetss/svg/curator/icon3.svg";
import {ReactComponent as TgIconBtn} from "../../assetss/svg/header/tg.svg";
import {ReactComponent as YotubeIconBtn} from "../../assetss/svg/header/youtube.svg";
import {ReactComponent as InfoIcon} from "../../assetss/svg/info.svg";
import Button from "../../common/button";
import ButtonV2 from "../../common/buttonv2";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

const contact = [
    {icon: <MailIcon/>, value: 'admin@lfstlr.com'},
    {icon: <MobileIcon/>, value: '8 (495) 999-99-99'},
    {icon: <TgIcon/>, value: 'lfstlr'},
]
const Contact = () => {

    return (
        <div className={s.main}>
            <TitleLk>
                Контакты
            </TitleLk>

            <div className={s.content}>
                <div className={s.content_top}>
                    <div className={s.content_top_left}>
                        {contact?.map((el, i) => <div key={i} className={s.contact_item}>
                            {el.icon}
                            <p className={s.contact_title}>{el.value}</p>
                        </div>)}
                    </div>
                    <div className={s.content_top_right}>
                        <div className={s.contact_info_icon}>
                            <InfoIcon/>
                        </div>

                        <div className={s.contact_work_info}>
                            <p>Тех. поддержка работает по будням с 10:00 до 20:00 по МСК.</p>
                            <p>Суббота и воскресенье - выходной.</p>
                            <p>При обращении обязательно пишите ваш логин в Клубе. Ответ в течении 24 часов.</p>
                        </div>
                    </div>
                </div>
                <div className={s.content_bottom}>
                    <div className={s.content_top_right}>
                        <div className={s.contact_info_icon}>
                            <InfoIcon/>
                        </div>

                        <div className={s.contact_work_info}>
                            <p>Инструкции по работе с кабинетом Клуба можно найти в информационной базе LifeStylerbot
                                или на официальном YouTube канале.</p>
                        </div>
                    </div>

                    <div className={s.btns}>
                        <div className={s.btn}>
                            <NavLink to={'https://t.me/Life_Styler_bot'} target={'_blank'}>
                                <Button>
                                    <div className={s.icon_btn}>
                                        <TgIconBtn/>
                                        Life$tyler бот
                                    </div>
                                </Button>
                            </NavLink>
                        </div>
                        <div className={s.btn}>
                            <NavLink to={'https://www.youtube.com/channel/UCHdYjFBUUBgA3qVsF1mLssw'} target={'_blank'}>
                                <ButtonV2>
                                    <div className={classNames(s.icon_btn, s.icon_btn_youtube)}>
                                        <YotubeIconBtn/>
                                        YouTube
                                    </div>
                                </ButtonV2>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
