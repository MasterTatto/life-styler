import React, {useState} from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import {Avatar, IconButton} from "@mui/material";
import classNames from "classnames";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {ReactComponent as BalanceIcon} from "../../assetss/svg/profile/balance.svg";
import {ReactComponent as UsersIcon} from "../../assetss/svg/profile/users.svg";
import {ReactComponent as InputIcon} from "../../assetss/svg/profile/input.svg";
import {ReactComponent as OutputIcon} from "../../assetss/svg/profile/output.svg";
import {ReactComponent as ViewIcon} from "../../assetss/svg/eye.svg";
import Pagination from "../../components/pagination";
import Button from "../../common/button";
import ButtonV2 from "../../common/buttonv2";
import {toast} from "react-toastify";
import ModalEdit from "./modalEdit";

const MyProfile = () => {
    const [openEditModal, setOpenEditModal] = useState(null)

    const copyContent = (contentToCopy) => {
        navigator.clipboard.writeText('https://fb.ru/article/457402/biznes-trenerle/457402/biznes-trener')
            .then(() => {
                toast.success('Текст скопирован в буфер обмена')
                // Здесь можно добавить обратную связь пользователю, что контент скопирован успешно
            })
            .catch(err => {
                toast.error('Не удалось скопировать текст');
                // Здесь можно добавить обратную связь пользователю, если копирование не удалось
            });
    };

    return (
        <div className={s.main}>
            {openEditModal && <ModalEdit handleClose={() => setOpenEditModal(false)} open={openEditModal}/>}

            <TitleLk>
                Личный кабинет
            </TitleLk>

            <div className={s.profile}>
                <div className={s.profile_top}>
                    <Avatar sx={{borderRadius: '50%', height: '160px', width: '160px'}}/>

                    <div className={s.profile_top_right_content}>
                        <div className={s.profile_top_right}>
                            <div
                                className={classNames(s.profile_top_right_item, s.profile_top_right_item_first)}>Логин
                            </div>
                            <div
                                className={classNames(s.profile_top_right_item, s.profile_top_right_item_second)}>Maybah123@Yandex.ru
                            </div>
                        </div>
                        <div className={s.profile_top_right}>
                            <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first)}>ФИО
                            </div>
                            <div
                                className={classNames(s.profile_top_right_item, s.profile_top_right_item_second)}>Александр
                                Семенов
                            </div>
                            <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_last)}>
                                <IconButton onClick={() => setOpenEditModal({name: 'ФИО', value: 'Александр Семенов'})}>
                                    <BorderColorIcon sx={{color: 'rgba(255, 102, 100, 1)'}}/>
                                </IconButton>
                            </div>
                        </div>
                        <div className={s.profile_top_right}>
                            <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first)}>Email
                            </div>
                            <div
                                className={classNames(s.profile_top_right_item, s.profile_top_right_item_second)}>Maybah123@Yandex.ru
                            </div>
                            <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_last)}>
                                <IconButton onClick={() => setOpenEditModal({name:'Email',value:'Maybah123@Yandex.ru'})}>
                                    <BorderColorIcon sx={{color: 'rgba(255, 102, 100, 1)'}}/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.profile_middle}>
                    <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first)}>
                        Реферальная ссылка
                    </div>
                    <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_second_v2)}>
                        <p>
                            https://fb.ru/article/457402/biznes-trenerle/457402/biznes-trener
                        </p>
                    </div>
                    <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_last)}>
                        <IconButton onClick={copyContent}>
                            <ContentCopyIcon sx={{color: 'rgba(255, 102, 100, 1)'}}/>
                        </IconButton>
                    </div>
                </div>

                <div className={s.profile_bottom_wrapper}>
                    <div className={s.profile_bottom}>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first_v2)}>
                            <BalanceIcon/>
                            Баланс
                        </div>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_second_v3)}>
                            <p>
                                $4 560
                            </p>
                        </div>
                    </div>
                    <div className={s.profile_bottom}>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first_v2)}>
                            <UsersIcon/>
                            Баланс клонов
                        </div>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_second_v3)}>
                            <p>
                                $1 256
                            </p>
                        </div>
                    </div>
                    <div className={s.profile_bottom}>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first_v2)}>
                            <InputIcon/>
                            Заработано
                        </div>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_second_v3)}>
                            <p>
                                $1 256
                            </p>
                        </div>
                    </div>
                    <div className={s.profile_bottom}>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_first_v2)}>
                            <OutputIcon/>
                            Выведено
                        </div>
                        <div className={classNames(s.profile_top_right_item, s.profile_top_right_item_second_v3)}>
                            <p>
                                $256
                            </p>
                        </div>
                    </div>
                </div>

                <div className={s.btns}>
                    <Button className={s.btn}>Фонды</Button>
                    <ButtonV2 className={s.btn}>Лотереи</ButtonV2>
                </div>
            </div>

            <div className={s.news}>
                <TitleLk>
                    Нововсти
                </TitleLk>

                <div className={s.news_content}>
                    {[1, 2, 3].map((el, i) => {
                        return <div className={s.news_item} key={el}>
                            <Avatar sx={{width: '100%', borderRadius: '0', height: '250px'}}/>

                            <div className={s.news_item_content}>
                                <p className={s.news_item_content_text}>
                                    {i === 1 ? 'Россия изучает расширение экспортной' : 'Россия изучает расширение экспортной инфраструктуры для нефти, заявил НовакРоссия изучает расширение экспортной инфраструктуры для нефти, заявил Новак Россия изучает расширение экспортной'}
                                </p>

                                <div className={s.news_item_content_info}>
                                    <p className={s.news_item_content_info_date}>12:31&nbsp;09.05.2022</p>
                                    <p className={s.news_item_content_info_view}>
                                        <ViewIcon/>
                                        325</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <Pagination/>
            </div>

        </div>
    );
};

export default MyProfile;
