import React from 'react';
import s from './styles.module.css'
import Container from "../../../../components/container";
import Text from "../../../../common/text";
import curator from '../../../../assetss/curator.png'
import {ReactComponent as Icon1} from "../../../../assetss/svg/curator/icon1.svg";
import {ReactComponent as Icon2} from "../../../../assetss/svg/curator/icon2.svg";
import {ReactComponent as Icon3} from "../../../../assetss/svg/curator/icon3.svg";

const Curator = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.content}>
                    <div className={s.img}>
                        <img src={curator} alt=""/>
                    </div>
                    <div className={s.description}>
                        <div className={s.under_line}>
                            <Text type={'h48'} className={s.title}>
                                Ваш куратор
                                <br/>
                                <span className={s.colored}>Анна Буланова</span>
                            </Text>
                        </div>

                        <div className={s.description_text}>
                            <Text type={'p18'}>
                                Добро пожаловать в клуб LifeStyler!
                                <br/>
                                Мы являемся успешной командой специалистов в сфере матричных направлений!
                            </Text>
                            <Text type={'p18'}>
                                Для этого Мы создали одну из лучших моделей. Маркетинг-план, позволяющий работать одной
                                командой и зарабатывать огромные суммы с первых дней участия!
                            </Text>
                            <Text type={'p18'}>
                                Убедитесь сами, изучив Наше предложение.
                            </Text>
                        </div>

                        <div className={s.description_contact}>
                            <div className={s.description_contact_item}>
                                <Icon1/>
                                <Text type={'p18'}>admin@lfstlr.com</Text>
                            </div>
                            <div className={s.description_contact_item}>
                                <Icon2/>
                                <Text type={'p18'}>8 (495) 999-99-99</Text>
                            </div>
                            <div className={s.description_contact_item}>
                                <Icon3/>
                                <Text type={'p18'}>lfstlr</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Curator;
