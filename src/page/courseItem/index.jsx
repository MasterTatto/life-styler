import React from 'react';
import s from './styles.module.css'
import {useParams} from "react-router-dom";
import Text from "../../common/text";
import img from "../../assetss/book.png";
import {Avatar, IconButton} from "@mui/material";
import {ReactComponent as Star} from "../../assetss/svg/courseItem/star.svg";
import {ReactComponent as Chat} from "../../assetss/svg/courseItem/chat.svg";
import {ReactComponent as Document} from "../../assetss/svg/courseItem/document.svg";
import Button from "../../common/button";

const CourseItem = () => {
    const {id} = useParams()

    return (
        <div className={s.main}>
            <div className={s.under_line}>
                <Text type={'h48'} className={s.title}>
                    Система обучения «Запуск Новичка №{id}»
                </Text>
            </div>

            <div className={s.content}>
                <Avatar src={img} sx={{borderRadius: '0', width: '45%', height: 'auto'}}/>

                <div className={s.info}>
                    <p className={s.info_top}>Идейные соображения высшего порядка, а также постоянное
                        информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании
                        системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие
                        различных форм деятельности играет важную роль в формировании форм развития. Задача организации,
                        в особенности же начало повседневной работы по формированию позиции позволяет оценить значение
                        позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем
                        настолько очевидна, что рамки и место обучения кадров требуют от нас анализа направлений
                        прогрессивного развития. </p>
                    <div className={s.info_bottom}>
                        <div className={s.info_bottom_left}>
                            <IconButton>
                                <Star/>
                            </IconButton>
                            <IconButton>
                                <Chat/>
                            </IconButton>
                            <IconButton>
                                <Document/>
                            </IconButton>
                        </div>
                        <div className={s.info_bottom_right}>
                            <Button variant={2} className={s.btn}>получить бесплатно</Button>
                            <Button>Купить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;
