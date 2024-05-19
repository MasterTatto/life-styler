import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import {Avatar, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Pagination from "../../components/pagination";

const reviews = [
    {
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        initials: "Егорова Анна Сергеевна",
        rating: 5,
        text: "Невероятно удобный продукт, рекомендую всем! Я полностью в восторге от этого продукта! Он помог мне повысить эффективность работы и сделал мою жизнь намного проще. Благодарю за отличное качество!"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        initials: "Никитин Василий Дмитриевич",
        rating: 2,
        text: "Не очень впечатлен качеством, надеюсь на исправление ситуации. Я ожидал большего от этого продукта. К сожалению, я немного разочарован его качеством. Надеюсь, что производитель примет меры по улучшению ситуации."
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        initials: "Денисова Галина Игоревна",
        rating: 4,
        text: "Хороший товар, соотношение цена-качество на высоте. Этот продукт представляет собой отличное сочетание цены и качества. Я доволен своей покупкой и считаю, что это отличный выбор для тех, кто ценит свое время и деньги."
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        initials: "Смирнова Людмила Александровна",
        rating: 5,
        text: "Продукт превзошел мои ожидания, спасибо за отличную работу! Этот продукт действительно превзошел все мои ожидания! Я не могу перестать восхищаться его качеством и функциональностью. Огромное спасибо за вашу отличную работу!"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        initials: "Петров Петр Петрович",
        rating: 3,
        text: "Продукт среднего качества, есть недостатки, которые нужно устранить. Однако он выполняет свои функции, и за свою цену вполне приемлем."
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        initials: "Григорьева Екатерина Андреевна",
        rating: 5,
        text: "Я в восторге от этого продукта! Он превзошел все мои ожидания. Удобен в использовании, качественный и стильный. Рекомендую всем!"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        initials: "Алексеев Алексей Алексеевич",
        rating: 4,
        text: "Отличный выбор за свою цену! Продукт полностью соответствует описанию, работает без нареканий. Немного не хватает некоторых функций, но в целом — отличный продукт!"
    }
];

const Review = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Отзывы
            </TitleLk>

            <div className={s.content}>
                {reviews?.map((el, i) => {
                    return <div key={i} className={s.item}>
                        <Avatar src={el.avatar} sx={{height: '100%', width: '200px', borderRadius: '0'}}/>

                        <div className={s.info}>
                            <p className={s.text}>{el.text}</p>
                            <div className={s.info_bottom}>
                                <p className={s.fullName}>{el.initials}</p>
                                <Rating icon={<StarIcon sx={{color: 'rgba(255, 102, 100, 1)'}}/>} name="read-only"
                                        value={el.rating}
                                        readOnly/>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <Pagination/>
        </div>
    );
};

export default Review;
