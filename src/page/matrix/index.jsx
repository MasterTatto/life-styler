import React from 'react';
import OrgChart from "./orgChart";
import s from './styles.module.css'
import OrgChartComponent from "./orgChart";
import TitleLk from "../../common/title_lk";

const Matrix = ({title}) => {
    return (
        <div className={s.content}>

            <TitleLk>
                {`Матрица ${title}`}
            </TitleLk>
            <OrgChartComponent/>
        </div>
    );
};

export default Matrix;
