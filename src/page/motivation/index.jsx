import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import Button from "../../common/button";
import {NavLink} from "react-router-dom";
import Pagination from "../../components/pagination";

const data = [
    {
        title: '«Бизнес в сети»',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
    {
        title: '«Бизнес в сети»',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
    {
        title: '«Бизнес в сети»',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. '
    },
]

const Motivation = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Мотивация
            </TitleLk>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <h3 className={s.title}>{el.title}</h3>
                        <p className={s.description}>{el.description}</p>

                        <NavLink to={`/lk/motivation/${i + 1}`}>
                            <div className={s.btn}>
                                <Button>
                                    ПЕРЕЙТИ
                                </Button>
                            </div>
                        </NavLink>
                    </div>
                })}
            </div>

            <Pagination/>
        </div>
    );
};

export default Motivation;
