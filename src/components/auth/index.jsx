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
    gap: '24px'
};

const Auth = ({open, handleClose}) => {
    const {setIsAuth} = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validate: (values) => {
            const errors = {}
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
                <Box sx={{...style, width: 440}}>

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

                            <Text type={'h32'} className={s.title}>Авторизация</Text>
                        </div>
                        <div className={s.inputs}>
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
                        </div>
                    </div>

                    <Button type={'submit'}>
                        Войти
                    </Button>

                </Box>
            </form>
        </Modal>
    );
};

export default Auth;
