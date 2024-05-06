import React, {useState} from 'react';
import s from './styles.module.css'
import Container from "../../../../components/container";
import Text from "../../../../common/text";
import {ReactComponent as ArrowIcon} from "../../../../assetss/svg/arrowSwipper.svg";
import classNames from "classnames";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Avatar, useMediaQuery} from "@mui/material";

const reviews = [
    {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        initials: "Александр Иванов",
        date: "12.05.2023",
        text: "Отличный продукт! Благодаря ему я решаю свои задачи гораздо быстрее. Очень доволен результатом и рекомендую его всем своим друзьям и коллегам."
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        initials: "Евгений Николаев",
        date: "09.03.2023",
        text: "Отличное приложение! Очень полезное и удобное в использовании. Никаких проблем с установкой и работой. Отличное приложение! Очень полезное и удобное в использовании. Никаких проблем с установкой и работой. Спасибо разработчикам за отличный продукт!"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        initials: "Вероника Петрова",
        date: "03.09.2022",
        text: "Продукт просто замечательный! Очень удобный и понятный интерфейс. Мне нравится, как он помогает мне организовывать мой рабочий процесс."
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        initials: "Григорий Сидоров",
        date: "28.07.2023",
        text: "Неплохой продукт. Есть некоторые недочеты, но в целом работает нормально. Мог бы быть лучше, но за эту цену - отличное соотношение качества и цены."
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        initials: "Дарья Федорова",
        date: "17.11.2022",
        text: "Не совсем то, что я ожидала. Некоторые функции не работают как ожидалось. В целом, не плохой продукт, но есть куда стремиться."
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        initials: "Жанна Васильева",
        date: "05.08.2022",
        text: "Продукт превзошел мои ожидания! Очень довольна результатом. Отличный сервис и поддержка. Продукт превзошел мои ожидания! Очень довольна результатом. Отличный сервис и поддержка. Рекомендую всем!"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        initials: "Игорь Павлов",
        date: "14.01.2023",
        text: "Обожаю этот продукт! Использую его каждый день. Просто волшебно, как он помогает мне организовать мою работу. Спасибо!"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        initials: "Юлия Сергеева",
        date: "23.06.2022",
        text: "Могло бы быть лучше. Некоторые функции не так удобны, как хотелось бы. Возможно, в будущем разработчики добавят больше опций и улучшат функционал."
    }
];

const Review = () => {
    const matches = useMediaQuery('(max-width:768px)');

    const [directionType, setDirectionType] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState();

    const handleArrowClick = (direction) => {
        if (!directionType) {
            setDirectionType(direction);
            setTimeout(() => setDirectionType(null), 800)
        }

    };

    return (
        <div className={s.main}>
            <Container>
                <div className={s.header}>
                    <div className={s.under_line}>
                        <Text type={'h48'} className={s.title}>
                            Отзывы наших партнеров
                        </Text>
                    </div>

                    <div className={s.navigate}>
                        <div className={classNames(s.arrow, s.arrow_left, activeIndex === 0 && s.disabled)}
                             onClick={() => {
                                 if (activeIndex === 0) return
                                 handleArrowClick('left')
                                 swiper?.slidePrev()
                             }}>
                            <ArrowIcon/>
                        </div>
                        <div className={s.dots}>
                            <div
                                className={classNames(s.dot_active, directionType === 'left' && s.dot_active_left, directionType === 'right' && s.dot_active_right)}/>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className={classNames(s.dot)}/>
                            ))}
                        </div>
                        <div
                            className={classNames(s.arrow, s.arrow_right, reviews?.length - 1 === activeIndex + (matches ? 0 : 2) && s.disabled)}
                            onClick={() => {
                                if (reviews?.length - 1 === activeIndex + (matches ? 0 : 2)) return
                                handleArrowClick('right')
                                swiper?.slideNext()
                            }}>
                            <ArrowIcon/>
                        </div>
                    </div>
                </div>

                <div className={s.swipper}>
                    <Swiper
                        style={{
                            paddingBottom: '1px'
                        }}
                        spaceBetween={matches ? 30 : 50}
                        slidesPerView={matches ? 1.2 : 3}

                        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {reviews?.map((el, i) => {
                            return <SwiperSlide key={i}>
                                <div className={s.item}>
                                    <div className={s.item_top}>
                                        <Avatar src={el.avatar} sx={{width: '90px', height: '90px'}}/>
                                        <div className={s.item_info}>
                                            <Text type={'h20'} className={s.full_name}>
                                                {el.initials}
                                            </Text>
                                            <Text type={'p12'} className={s.date}>
                                                {el.date}
                                            </Text>
                                        </div>
                                    </div>
                                    <Text type={'p18'} className={s.item_text}>
                                        {el.text}
                                    </Text>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Review;
