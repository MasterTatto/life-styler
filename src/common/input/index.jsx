import React from 'react';
import s from './styles.module.css'
import {TextField} from "@mui/material";

const Input = ({
                   error,
                   helperText,
                   onBlur,
                   onChange,
                   value,
                   name,
                   placeholder,
                   title
               }) => {
    return (
        <div className={s.input}>
            {title && <p className={s.title}>{title}</p>}
            <TextField
                error={error}
                helperText={helperText}
                onBlur={onBlur} onChange={onChange}
                value={value} name={name}
                InputLabelProps={{shrink: true}}
                inputProps={{
                    style: {
                        height: '48px',
                        padding: '0 14px',
                    },
                }}
                sx={{
                    border: 'none',
                    outline: 'none',
                    '& .MuiFormHelperText-root': {
                        // color: '#f3afaf'
                    },
                    "& .MuiOutlinedInput-root": {
                        boxShadow: 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                        background: '#f2f2f2',
                        borderRadius: '5px',
                        "& fieldset": {
                            border: "none",
                        },
                        "&.Mui-focused fieldset": {
                            border: "none",
                        },
                    },
                }} fullWidth id="outlined-basic" placeholder={placeholder} variant="outlined"/>
        </div>
    );
};

export default Input;
