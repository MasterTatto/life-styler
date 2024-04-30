import React from 'react';
import s from './styles.module.css'
import classNames from "classnames";

const Button = ({type = 'button', onClick, children, className, variant = 1}) => {
    return (
        <button type={type} onClick={onClick} className={classNames(s.btn, variant === 2 && s.btn_v2, className)}>
            {children}
        </button>
    );
};

export default Button;
