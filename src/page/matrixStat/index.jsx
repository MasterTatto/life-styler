import React from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import {ReactComponent as Icon1} from "../../assetss/svg/matrix_stat/icon1.svg";
import {ReactComponent as Icon2} from "../../assetss/svg/matrix_stat/icon2.svg";
import {ReactComponent as Icon3} from "../../assetss/svg/matrix_stat/icon3.svg";
import {ReactComponent as Icon4} from "../../assetss/svg/matrix_stat/icon4.svg";
import {ReactComponent as Icon5} from "../../assetss/svg/matrix_stat/icon5.svg";

const MatrixStat = ({title}) => {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 300)
    }

    const mock = [
        {icon: <Icon1/>, title: 'Переходы по реферальной ссылке', count: getRandomNumber()},
        {icon: <Icon2/>, title: 'Количество регистраций', count: getRandomNumber()},
        {icon: <Icon3/>, title: 'Количество активированных партнеров', count: getRandomNumber()},
        {icon: <Icon4/>, title: 'Количество рефералов', count: getRandomNumber()},
        {icon: <Icon5/>, title: 'Общее количество активированных партнеров в Структуре', count: getRandomNumber()},
    ]
    return (
        <div>
            <TitleLk>
                {`Статистика ${title}`}
            </TitleLk>

            <div className={s.content}>
                {mock?.map((el, i) => {
                    return <div key={i} style={{
                        borderBottom: i === mock.length - 1 && 'none'
                    }} className={s.item}>
                        <div className={s.item_top}>
                            {el.icon}
                            <p className={s.title}>{el.title}</p>
                        </div>
                        <p className={s.item_bottom}>{el.count}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default MatrixStat;
