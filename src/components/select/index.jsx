import React from 'react';
import Select from 'react-select'

const customStyles = {
    control: (base) => ({
        ...base,
        boxShadow: 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        background: '#f2f2f2',
        border: 'none'
    }),
    menu: (base) => ({
        ...base,
        fontSize: '16px',
    }),

    indicator: (base) => ({
        ...base,
        color: '#007bff', /* Изменить цвет иконки */
    }),
    indicatorSelected: (base) => ({
        ...base,
        color: '#28a745', /* Изменить цвет иконки при открытии меню */
    }),
};

const CustomSelect = ({options = [], placeholder}) => {
    return (
        <Select styles={customStyles} options={options} placeholder={placeholder}/>
    );
};

export default CustomSelect;