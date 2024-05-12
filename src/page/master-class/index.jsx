import React from 'react';
import s from './styles.module.css'
import Container from "../../components/container";
import Text from "../../common/text";
import img from '../../assetss/book.png'
import Button from "../../common/button";
import {NavLink} from "react-router-dom";
import PaginationCustom from "../../components/pagination";

const data = [
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        link: 'https://www.youtube.com/embed/fKopy74weus'
    },
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        link: 'https://www.youtube.com/embed/fKopy74weus'
    },
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        link: 'https://www.youtube.com/embed/fKopy74weus'
    },
]
const MasterClass = () => {
    return (
        <div className={s.main}>
            <div className={s.under_line}>
                <Text type={'h48'} className={s.title}>
                    Мастер-классы
                </Text>
            </div>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <div className={s.item_left}>
                            <Text type={'h32'} className={s.item_title}>{el.title}</Text>
                            <Text type={'p18'} className={s.item_sub_title}>{el.sub_title}</Text>

                            <div className={s.btns}>
                                <NavLink to={`/lk/master-class/${i + 1}`}>
                                    <Button variant={2} className={s.dark_btn}>ПЕРЕЙТИ</Button>
                                </NavLink>
                                <NavLink>
                                    <Button>Купить</Button>
                                </NavLink>
                            </div>
                        </div>
                        <div className={s.item_right}>
                            <iframe width="100%" height="100%" src={el.link}
                                    title="Imagine Dragons - Thunder" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                })}
            </div>

            <PaginationCustom/>
        </div>
    );
};

export default MasterClass;
