import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import Button from "../../common/button";
import {NavLink} from "react-router-dom";
import Pagination from "../../components/pagination";
import {ReactComponent as View} from "../../assetss/svg/eye.svg";

const data = [
    {
        title: '«Бизнес в сети»',
        date: '12:32 23.03.2021',
        view: '12',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
    {
        title: '«Бизнес в сети»',
        date: '12:32 01.03.2021',
        view: '32',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
    {
        title: '«Бизнес в сети»',
        date: '12:32 04.02.2021',
        view: '43',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
]

const Article = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Полезные статьи
            </TitleLk>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <h3 className={s.title}>{el.title}</h3>
                        <p className={s.description}>{el.description}</p>

                        <div className={s.footer}>

                            <div className={s.btn}>
                                <NavLink to={`/lk/article/${i + 1}`}>
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

export default Article;
