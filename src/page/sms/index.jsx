import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import {Avatar, IconButton} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import {NavLink} from "react-router-dom";

const Sms = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Сообщения
            </TitleLk>

            <div className={s.content}>
                {[1, 2, 3, 4].map((el, i) => {
                    return <NavLink to={`/lk/chat/${i + 1}`}>
                        <div key={i} className={s.item}>
                            <div className={s.close_box}>
                                <IconButton>
                                    <CloseIcon sx={{color: 'rgba(255, 102, 100, 1)'}}/>
                                </IconButton>
                            </div>
                            <Avatar sx={{height: '100%', width: '200px', borderRadius: 0}}/>

                            <div className={s.item_content}>
                                <div className={s.item_content_top}>
                                    <p className={s.item_content_top_left}>
                                        Онлайн-маркетинг быстро меняется, поэтому важно постоянно узнавать новые
                                        тенденции.
                                        В клубе Life$tyler доступ к образованию просто за смешные деньги! Это очень
                                        ценно и
                                        помогает мне в работе.
                                    </p>
                                    <div className={s.item_content_left_bottom}>
                                        {[0, 2].includes(i) ? <MailOutlineIcon
                                                sx={{color: 'rgba(119, 124, 139, .5)', width: '60px', height: 'auto'}}/> :
                                            <DraftsOutlinedIcon
                                                sx={{
                                                    color: 'rgba(119, 124, 139, .5)',
                                                    width: '60px',
                                                    height: 'auto'
                                                }}/>}

                                    </div>
                                </div>
                                <div className={s.item_content_bottom}>
                                    <div className={s.item_content_bottom_left}>
                                        <p className={s.item_content_bottom_left_name}>Александр Семенов</p>
                                        <p className={s.item_content_bottom_left_type}>Fenix</p>
                                    </div>

                                    <p className={s.item_content_bottom_date}> 12:31&nbsp;09.05.2022</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                })}
            </div>
        </div>
    );
};

export default Sms;
