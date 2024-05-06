import React from 'react';
import s from './styles.module.css'
import Container from "../../../../components/container";
import gays from '../../../../assetss/guys.png'
import classNames from "classnames";
import Text from "../../../../common/text";
import Button from "../../../../common/button";

const Main = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.content}>
                    <div className={classNames(s.item, s.item_bg)}/>
                    <div className={s.item}>
                        <Text type={'h48'} className={s.title}>
                            Образовательная платформа <Text type={'h48'} className={s.title_colore}>Life$tyler</Text>
                        </Text>
                        <Text type={'h32'} className={s.sub_title}>
                            Ценные навыки и возможность создать свой Бизнес в интернете
                        </Text>
                        <Text className={s.description}>
                            Получите доступ к авторским курсам и мастер-классам от признанных экспертов маркетинга и
                            менеджмента.
                            <Text className={s.description_v2}>
                                Клуб <Text className={s.description_v3}>Life$tyler</Text> — образование и карьера на
                                одной цифровой площадке.
                            </Text>
                        </Text>

                        <div className={s.btns}>
                            <Button className={s.btn}>
                                Регистрация
                            </Button>
                            <Button variant={2} className={s.btn}>
                                Войти
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={s.img}>
                <img src={gays} className={s.bg} alt=""/>
            </div>
        </div>
    );
};

export default Main;
