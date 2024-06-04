import React from 'react';
import OrgChart from "./orgChart";
import s from './styles.module.css'
import OrgChartComponent from "./orgChart";
import TitleLk from "../../common/title_lk";
import CustomSelect from "../../components/select";
import Button from "../../common/button";
import classNames from "classnames";
import ButtonV2 from "../../common/buttonv2";
import {ReactComponent as Icon1} from "../../assetss/svg/footer_matrix/1.svg";
import {ReactComponent as Icon2} from "../../assetss/svg/footer_matrix/2.svg";
import {ReactComponent as Icon3} from "../../assetss/svg/footer_matrix/3.svg";
import {ReactComponent as Icon4} from "../../assetss/svg/footer_matrix/4.svg";
import {ReactComponent as Icon5} from "../../assetss/svg/footer_matrix/5.svg";
import {ReactComponent as Icon6} from "../../assetss/svg/footer_matrix/6.svg";
import {ReactComponent as Icon7} from "../../assetss/svg/footer_matrix/7.svg";
import {ReactComponent as Icon8} from "../../assetss/svg/footer_matrix/8.svg";
import {ReactComponent as Icon9} from "../../assetss/svg/footer_matrix/9.svg";
import {ReactComponent as Icon10} from "../../assetss/svg/footer_matrix/10.svg";
import {ReactComponent as Icon11} from "../../assetss/svg/footer_matrix/11.svg";
import {ReactComponent as Icon12} from "../../assetss/svg/footer_matrix/12.svg";
import {ReactComponent as Icon13} from "../../assetss/svg/footer_matrix/13.svg";

const footer = {
    1: [
        {title: 'Матрица выше', icon: <Icon1/>},
        {title: 'Матрица ниже', icon: <Icon2/>},
        {title: 'Количество закрытых мест', icon: <Icon3/>},
    ],
    2: [
        {title: 'Купленное место', icon: <Icon4/>},
        {title: 'Клон', icon: <Icon5/>},
        {title: 'Написать партнеру', icon: <Icon6/>},
    ],
    3: [
        {title: 'Разблокировано', icon: <Icon7/>},
        {title: 'Заблокировано', icon: <Icon8/>},
        {title: 'Личная структура', icon: <Icon9/>},
        {title: 'Перелив', icon: <Icon10/>},
    ],
    4: [
        {title: 'Перелив', icon: <Icon11/>},
        {title: 'В сети', icon: <Icon12/>},
        {title: 'Не в сети', icon: <Icon13/>},
    ],
}
const Matrix = ({title}) => {
    return (
        <div className={s.main}>

            <TitleLk>
                {`Матрица ${title}`}
            </TitleLk>
            <div className={s.content}>
                <div className={s.header}>
                    <CustomSelect placeholder={'Матрицы'}/>
                    <div className={s.line}/>
                    <div className={s.header_bottom}>
                        <CustomSelect placeholder={'Поиск по логину'}/>
                        <CustomSelect placeholder={'Список клонов'}/>
                        <CustomSelect placeholder={'Блокировки'}/>
                    </div>

                    <div className={s.btns}>
                        <Button className={s.btn}>
                            Купить место
                        </Button>
                        <ButtonV2 variant={2} className={classNames(s.btn)}>
                            Следующее место
                        </ButtonV2>
                    </div>
                    <div className={s.line}/>
                </div>
                <div className={s.org}>
                    <OrgChartComponent/>
                </div>
                <div className={s.footer}>
                    {Object?.keys(footer)?.map((key) => {
                        return <div className={s.item_inside}>
                            {footer[key]?.map((el) => {

                                return <div className={s.item}>
                                    {el.icon}
                                    <p className={s.title_item}>{el.title}</p>

                                </div>
                            })}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Matrix;
