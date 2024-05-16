import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import Button from "../../common/button";
import {NavLink} from "react-router-dom";
import Pagination from "../../components/pagination";
import {Avatar} from "@mui/material";

const data = [
    {
        title: 'XMind - программа для создания диаграмм.',
        link: 'https://xmind.app/',
        img: 'https://i.ibb.co/S0j20kZ/XMind-ZEN-256x256-2x-f7d5f6b3fe.png',
        description: 'Программа на ПК для зарисовки структуры матрицы. Нажмите "Перейти" чтобы попасть на сайт. Нажмите "Подробнее" для перехода к видео инструкциям.'
    },
    {
        title: 'Создание картинок на сервисе Canva',
        link: 'https://www.canva.com/ru_ru/',
        img: 'https://i.ibb.co/wBwSbmW/canva-logo.png',
        description: 'Онлайн сервис для создания картинок, презентаций, логотипов и многое другое бесплатно. Есть приложение для телефонов. Нажмите "Перейти" чтобы попасть на сайт. Нажмите "Подробнее" для перехода к видео инструкциям.'
    },
    {
        title: 'Вебинарная комната',
        link: 'https://cp.mywebinar.com/',
        img: 'https://i.ibb.co/fQ1rRtP/mywebinar.png',
        description: 'Mywebinar - довольно популярный сервис для проведения вебинаров. Бесплатная версия имеет ограничение 20 человек. Ознакомится с данным сервисом можно нажав кнопку "Перейти". Нажмите "Подробнее" - для перехода к видео инструкциям.'
    },
]

const Service = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Инструменты и сервисы
            </TitleLk>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <div className={s.item_left}>
                            <div className={s.item_left_top}>
                                <h3 className={s.title}>{el.title}</h3>
                                <p className={s.description}>{el.description}</p>
                            </div>
                            <NavLink to={el.link} target={'_blank'}>
                                <div className={s.btn}>
                                    <Button>
                                        ПЕРЕЙТИ
                                    </Button>
                                </div>
                            </NavLink>
                        </div>

                        <div className={s.avatar}>
                            <Avatar src={el.img} sx={{borderRadius: '0', width: '100%', height: 'auto'}}/>
                        </div>
                    </div>
                })}
            </div>

            <Pagination/>
        </div>
    );
};

export default Service;
