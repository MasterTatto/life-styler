import React from 'react';
import s from './styles.module.css'
import Container from "../../components/container";
import Text from "../../common/text";
import img from '../../assetss/book.png'
import Button from "../../common/button";
import {NavLink, useNavigate} from "react-router-dom";
import PaginationCustom from "../../components/pagination";
import TitleLk from "../../common/title_lk";

const data = [
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        img: img
    },
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        img: img
    },
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        img: img
    },
]
const Course = () => {
    const navigate = useNavigate()
    return (
        <div className={s.main}>

            <TitleLk>
                Курсы
            </TitleLk>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <div className={s.item_left}>
                            <Text type={'h32'} className={s.item_title}>{el.title}</Text>
                            <Text type={'p18'} className={s.item_sub_title}>{el.sub_title}</Text>

                            <div className={s.btns}>
                                <NavLink to={`/lk/course/${i + 1}`}>
                                    <Button variant={2} className={s.dark_btn}>ПЕРЕЙТИ</Button>
                                </NavLink>
                                <NavLink>
                                    <Button>Купить</Button>
                                </NavLink>
                            </div>
                        </div>
                        <div className={s.item_right}>
                            <img src={el.img} alt={el.title}/>
                        </div>
                    </div>
                })}
            </div>

            <PaginationCustom/>
        </div>
    );
};

export default Course;
