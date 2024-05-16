import React from 'react';
import s from './styles.module.css'
import classNames from "classnames";

const ButtonV2 = ({type = 'button', onClick, children, className, variant = 1}) => {
    return (
        <button type={type} onClick={onClick} className={classNames(s.btn,s.btn_v2, className)}>
            {children}
        </button>
    );
};

export default ButtonV2;
