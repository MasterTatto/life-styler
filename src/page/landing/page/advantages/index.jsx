import React from 'react';
import s from './styles.module.css'
import Text from "../../../../common/text";
import {ReactComponent as Icon1} from "../../../../assetss/svg/advantages/icon1.svg";
import {ReactComponent as Icon2} from "../../../../assetss/svg/advantages/icon2.svg";
import {ReactComponent as Icon3} from "../../../../assetss/svg/advantages/icon3.svg";
import {ReactComponent as Icon4} from "../../../../assetss/svg/advantages/icon4.svg";
import Container from "../../../../components/container";

const data = [
    {
        icon: <Icon1/>, title: 'Авторская \n' +
            'система курсов\n' +
            'для личностного \n' +
            'и карьерного роста'
    },
    {
        icon: <Icon2/>, title: 'Инструменты \n' +
            'для повышения\n' +
            'эффективности продаж'
    },
    {
        icon: <Icon3/>, title: 'Партнерские программы,\n' +
            'доступные для людей с любым образованием\n' +
            'и уровнем дохода'
    },
    {
        icon: <Icon4/>, title: 'Платформа для общения с новыми людьми\n' +
            'и получения новых знаний \n' +
            'и опыта'
    },
]
const Advantages = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.under_line}>
                    <Text type={'h48'} className={s.title}>
                        Наши преимущества
                    </Text>
                </div>

                <div className={s.content}>
                    {data?.map((el, i) => {
                        return <div className={s.item} key={i}>
                            <div className={s.icon}>
                                {el.icon}
                            </div>
                            <div className={s.line}/>
                            <Text className={s.title_item} type={'p18'}>
                                {el.title}
                            </Text>
                        </div>
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Advantages;
