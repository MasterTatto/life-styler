import React from 'react';
import s from './styles.module.css'
import img from '../../assetss/test.png'
import Text from "../../common/text";
import {useParams} from "react-router-dom";
import classNames from "classnames";

const StandartItem = ({type}) => {
    const {id} = useParams()

    return (
        <div className={s.test}>
            <div className={s.under_line}>
                <Text type={'h48'} className={s.title}>
                    Бизнес в сетевом маркетинге №{id}
                </Text>
            </div>

            <div className={s.content}>
                {type === 1 ? <div className={classNames(s.img, type === 1 && s.iframe)}>
                    <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/fKopy74weus'}
                            title="Imagine Dragons - Thunder" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div> : <img className={s.img} src={img}/>}
                <p className={s.description}>
                    Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение
                    нашей
                    деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным
                    потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в
                    формировании форм развития. Задача организации, в особенности же начало повседневной работы по
                    формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении
                    поставленных
                    задач. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                    обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров,
                    соответствует
                    насущным потребностям.
                    Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение
                    нашей
                    деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным
                    потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в
                    формировании форм развития. Задача организации, в особенности же начало повседневной работы по
                    формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении
                    поставленных
                    задач. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                    обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров,
                    соответствует
                    насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль
                    в
                    формировании форм развития. Задача организации, в особенности же начало повседневной работы по
                    формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении
                    поставленных
                    задач. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                    обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров,
                    соответствует
                    насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль
                    в
                    формировании форм развития. Задача организации, в особенности же начало повседневной работы по
                    формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении
                    поставленных
                    задач. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                    обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров,
                    соответствует
                    насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль
                    в
                    формировании форм развития. Задача организации, в особенности же начало повседневной работы по
                    формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении
                    поставленных
                    задач. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                    обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров,
                    соответствует
                    насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль
                    в
                    формировании форм развития. Задача организации, в особенности же начало повседневной работы по
                    формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении
                    поставленных
                    задач. </p>
            </div>
        </div>
    );
};

export default StandartItem;