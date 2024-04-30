import React from 'react';
import s from './styles.module.css'
import classNames from "classnames";

const Container = ({children, className}) => {
    return (
        <div className={classNames(s.container, className)}>
            {/*<div className={s.content}>*/}
                {children}
            {/*</div>*/}
        </div>
    );
};

export default Container;
