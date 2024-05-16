import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import Button from "../../common/button";
import {NavLink} from "react-router-dom";
import Pagination from "../../components/pagination";
import {ReactComponent as View} from "../../assetss/svg/eye.svg";

const data = [
    {
        title: '14.05.24 г Приглашаем всех на видео-встречу! Основная Программа !',
        date: '12:32 13.05.2024',
        view: '12',
        description: 'Разбор маркетинга, преимущества, фишки и возможности программы Основной Программы. Ответы на вопросы.'
    },
    {
        title: 'СВЕЖИЕ НОВОСТИ!! 03.05.24 г Презентация Нового маркетинга Flash Matrix! Приглашаем всех на видео-встречу!',
        date: '12:32 02.05.2024',
        view: '32',
        description: 'Разбор маркетинга, преимущества, фишки и возможности программы Flash Matrix , мотивация. Ответы на вопросы.'
    },
    {
        title: '«Бизнес в сети»',
        date: '12:32 04.02.2021',
        view: '43',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
]

const News = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Новости
            </TitleLk>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <h3 className={s.title}>{el.title}</h3>
                        <p className={s.description}>{el.description}</p>

                        <div className={s.footer}>

                            <div className={s.btn}>
                                <NavLink to={`/lk/news/${i + 1}`}>
                                    <Button>
                                        ПЕРЕЙТИ
                                    </Button>
                                </NavLink>
                            </div>

                            <div className={s.footer_info}>
                                <p className={s.date}>
                                    {el.date}</p>
                                <p className={s.view}>
                                    <View/>
                                    {el.view}
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <Pagination/>
        </div>
    );
};

export default News;
