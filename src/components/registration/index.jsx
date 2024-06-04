import React, {useContext} from 'react';
import s from './styles.module.css'
import {Box, IconButton, Modal, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assetss/logo_footer.png'
import bg from '../../assetss/landing/bg_1.png'
import Text from "../../common/text";
import Button from "../../common/button";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {AuthContext} from "../../App";
import CustomInput from "../input";
import {DatePicker, DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 580,
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
    gap: '24px'
};

const Registartion = ({open, handleClose}) => {
    const {setIsAuth} = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            inviterLogin: '',
            login: '',
            password: '',
            lastName: '',
            firstName: '',
            middleName: '',
            email: '',
            birthDate: null,
        },
        validate: (values) => {
            const errors = {}

            if (!values.middleName) {
                errors.middleName = 'Обязательное поле'
            } else if (values.middleName.length < 3) {
                errors.middleName = 'Минимальная длина 3 символа'
            }

            if (!values.firstName) {
                errors.firstName = 'Обязательное поле'
            } else if (values.firstName.length < 3) {
                errors.firstName = 'Минимальная длина 3 символа'
            }

            if (!values.lastName) {
                errors.lastName = 'Обязательное поле'
            } else if (values.lastName.length < 3) {
                errors.lastName = 'Минимальная длина 3 символа'
            }

            if (!values.inviterLogin) {
                errors.inviterLogin = 'Обязательное поле'
            } else if (values.inviterLogin.length < 3) {
                errors.inviterLogin = 'Минимальная длина 3 символа'
            }

            if (!values.login) {
                errors.login = 'Обязательное поле'
            } else if (values.login.length < 3) {
                errors.login = 'Минимальная длина 3 символа'
            }

            if (!values.password) {
                errors.password = 'Обязательное поле'
            } else if (values.password.length < 3) {
                errors.password = 'Минимальная длина 3 символа'
            }
            return errors
        },
        onSubmit: (values) => {
            console.log('submit')
            if (values.login === 'admin' && values.password === 'admin') {
                toast.success('Вы в системе')
                setIsAuth(values.login)
                handleClose()
            } else {
                toast.error('Неверный логин или пароль')
            }

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
                <Box sx={{...style}}>

                    <div className={s.top}>
                        <div className={s.close}>
                            <img src={logo} alt="logo"/>
                            <IconButton onClick={handleClose}>
                                <CloseIcon
                                    // sx={{color: '#fff'}}
                                />
                            </IconButton>
                        </div>
                        <div className={s.icon_title}>

                            <Text type={'h32'} className={s.title}>Регистрация</Text>
                        </div>
                        <div className={s.inputs}>
                            <CustomInput
                                errorText={formik.touched.inviterLogin && formik.errors.inviterLogin}
                                name={'inviterLogin'} placeholder={'Логин пригласившего'} handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.inviterLogin}
                            />

                            <CustomInput
                                errorText={formik.touched.login && formik.errors.login}
                                name={'login'} placeholder={'Логин'} handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.login}
                            />

                            <CustomInput
                                errorText={formik.touched.password && formik.errors.password}
                                name={'password'} type={'password'} placeholder={'Пароль'}
                                handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.password}
                            />

                            <CustomInput
                                errorText={formik.touched.lastName && formik.errors.lastName}
                                name={'lastName'} placeholder={'Фамилия'} handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.lastName}
                            />
                            <CustomInput
                                errorText={formik.touched.firstName && formik.errors.firstName}
                                name={'firstName'} placeholder={'Имя'} handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.firstName}
                            />
                            <CustomInput
                                errorText={formik.touched.middleName && formik.errors.middleName}
                                name={'middleName'} placeholder={'Отчество'} handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.middleName}
                            />
                            <CustomInput
                                errorText={formik.touched.email && formik.errors.email}
                                name={'email'} placeholder={'Почта'} handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange} value={formik.values.email}
                            />
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker
                                    value={formik.values.birthDate}
                                    error={formik.touched.birthDate && formik.errors.birthDate}
                                    helperText={formik.touched.birthDate && formik.errors.birthDate}
                                    onBlur={formik.handleBlur}
                                    placeholder={'Дата рождения'}
                                    slotProps={{textField: {placeholder: 'Дата рождения'}}}
                                    name={'birthDate'}
                                    onChange={(v) => formik.setFieldValue('birthDate', v)}
                                    sx={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',

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
                                    }} fullWidth/>
                            </LocalizationProvider>
                        </div>
                    </div>

                    <Button type={'submit'}>
                        Регистрация
                    </Button>

                </Box>
            </form>
        </Modal>
    );
};

export default Registartion;
