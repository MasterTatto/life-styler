import React from 'react';
import s from "./styles.module.css";
import TitleLk from "../../common/title_lk";
import {ReactComponent as Book} from "../../assetss/svg/book.svg";
import {ReactComponent as Movie} from "../../assetss/svg/movie.svg";
import {ReactComponent as Music} from "../../assetss/svg/music.svg";
import ButtonV2 from "../../common/buttonv2";
import {NavLink} from "react-router-dom";

const data = [
    {
        title: 'Книги',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития.',
        icon: <Book/>,
        link: 'books'
    },
    {
        title: 'Фильмы',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития.',
        icon: <Movie/>,
        link: 'films'
    },
    {
        title: 'Музыка',
        description: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития.',
        icon: <Music/>,
        link: 'music'
    },
]
const FilmBookMusic = () => {
    return (
        <div className={s.main}>
            <TitleLk>
                Книги, фильмы, музыка
            </TitleLk>

            <div className={s.content}>
                {data?.map((el, i) => {
                    return <div className={s.item} key={i}>
                        <div className={s.item_left}>
                            <h3 className={s.title}>{el.title}</h3>
                            <p className={s.desc}>{el.description}</p>
                            <NavLink to={`/lk/media/${el.link}`}>
                                <div className={s.btn}>
                                    <ButtonV2 className={s.btn}>ПЕРЕЙТИ</ButtonV2>
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.item_right}>
                            {el.icon}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default FilmBookMusic;
