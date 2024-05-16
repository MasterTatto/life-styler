import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";


const Review = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Отзывы
            </TitleLk>

            <div className={s.content}>
                content
            </div>
        </div>
    );
};

export default Review;
