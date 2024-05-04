import React from 'react';
import s from './styles.module.css'
import classNames from "classnames";

const Text = ({children, type = 'p20', className, onClick, style}) => {
    const TextType = ({children}) => {
        return <>
            {
                ((type === 'h48') &&
                    <p style={style} onClick={onClick && onClick}
                       className={classNames(s.text, s.text_h1, className)}>{children}</p>) ||
                ((type === 'h32') &&
                    <p style={style} onClick={onClick && onClick}
                       className={classNames(s.text, s.text_h2, className)}>{children}</p>) ||
                ((type === 'h20') &&
                    <p style={style} onClick={onClick && onClick}
                       className={classNames(s.text, s.text_h3, className)}>{children}</p>) ||
                <p style={style} onClick={onClick && onClick} className={
                    classNames(
                        s.text_p, type === 'p18' && s.text_p2,
                        type === 'p16' && s.text_p3,
                        type === 'p12' && s.text_p4, className)}
                >
                    {children}
                </p>
            }
        </>
    }
    return (
        <TextType>
            {children}
        </TextType>
    );
};

export default Text;
