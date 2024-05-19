import React from 'react';
import s from "./styles.module.css";
import {Box, IconButton, Modal, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../../../common/input";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import ButtonV2 from "../../../common/buttonv2";
import Button from "../../../common/button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 440,
    // backgroundImage: `url(${bg})`,
    background: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
};

const ModalEdit = ({open, handleClose}) => {


    const formik = useFormik({
        initialValues: {
            value: open?.value
        },
        validate: (values) => {
            const errors = {}
            if (!values.value) {
                errors.value = 'Обязательное поле'
            } else if (open?.name === 'Email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.value)) {
                errors.value = 'Невалидная почта'
            } else if (values.value.length < 3) {
                errors.value = 'Минимальная длина 3 символа'
            }

            return errors
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            toast.success('Успешно!')
            handleClose()
        }
    })

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <form className={s.form} onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit(e)
            }}>
                <Box sx={{...style, width: 440}}>
                    <div className={s.header}>
                        <h3>Редактирование</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>

                    <div className={s.content}>
                        <Input
                            title={open?.name}
                            onBlur={formik.handleBlur} onChange={formik.handleChange}
                            value={formik.values.value} name={'value'}
                            error={formik.touched.value && formik.errors.value}
                            helperText={formik.touched.value && formik.errors.value}
                        />
                    </div>

                    <div className={s.btns}>
                        <ButtonV2 onClick={handleClose}>Отмена</ButtonV2>
                        <Button type={'submit'}>Сохранить</Button>
                    </div>
                </Box>
            </form>

        </Modal>
    );
};

export default ModalEdit;
