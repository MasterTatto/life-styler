import React from 'react';
import {TextField} from "@mui/material";

const CustomInput = ({type = 'text', errorText, handleBlur, handleChange, value, name, placeholder}) => {
    return (
        <TextField
            error={errorText}
            helperText={errorText}
            onBlur={handleBlur} onChange={handleChange}
            value={value} name={name}
            type={type}
            autoComplete={'new-password'}
            size={'medium'}
            InputLabelProps={{
                shrink: true,

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
    );
};

export default CustomInput;