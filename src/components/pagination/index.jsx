import React from 'react';
import s from './styles.module.css'
import {Pagination} from "@mui/material";

const PaginationCustom = () => {
    return (
        <div className={s.pagination}>
            <Pagination sx={{
                '& .Mui-selected': {
                    backgroundColor: 'rgba(255, 102, 100, 1) !important'
                }
            }} count={10} color="secondary"/>
        </div>
    );
};

export default PaginationCustom;
