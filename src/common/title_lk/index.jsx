import React from 'react';
import s from './styles.module.css'
import Text from "../text";

const TitleLk = ({children}) => {
    return (
        <div className={s.under_line}>
            <Text type={'h48'} className={s.title}>
                {children}
            </Text>
        </div>
    );
};

export default TitleLk;
