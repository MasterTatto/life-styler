import React from 'react';
import s from './styles.module.css'
import Container from "../../../../components/container";
import Text from "../../../../common/text";
import book from '../../../../assetss/book.png'
import {ReactComponent as Accept} from "../../../../assetss/svg/assept.svg";
import {ReactComponent as Icon1} from "../../../../assetss/svg/pay/icon1.svg";
import {ReactComponent as Icon2} from "../../../../assetss/svg/pay/icon2.svg";
import {ReactComponent as Icon3} from "../../../../assetss/svg/pay/icon3.svg";
import {ReactComponent as Icon4} from "../../../../assetss/svg/pay/icon4.svg";

const priceInfo = [
    {title: 'Доступ к обновляемым курсам по компьютерной грамотности, психологии, личностному росту', width: 504},
    {
        title: 'Доступ к мастер-классам от опытных \n' +
            'менеджеров и кураторов проекта'
        , width: 404
    },
    {
        title: 'Место в одной из партнерских \n' +
            'программ Клуба', width: 304
    },
    {
        title: 'Возможность участия \n' +
            'в жизни сообщества', width: 254
    },
]

const teachInfo = [
    {
        text: 'Работать с компьютерными \n' +
            'программами, необходимыми \n' +
            'для продаж', icon: <Icon1/>, width: 323
    },
    {
        text: 'Развиваться в сетевом маркетинге \n' +
            'и создавать личный бренд', icon: <Icon2/>, width: 380
    },
    {
        text: 'Создавать и продвигать \n' +
            'бизнес-страницы \n' +
            'в социальных сетях', icon: <Icon3/>, width: 300
    },
    {
        text: 'Понимать психологию продаж \n' +
            'и приёмы влияния на клиента', icon: <Icon4/>, width: 300
    }
]
const Price = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.under_line}>
                    <Text type={'h48'} className={s.title}>
                        Стоимость обучения
                    </Text>
                </div>

                <div className={s.description}>
                    <Text type={'h32'} className={s.description_item}>
                        <Text type={'h32'} className={s.description_item_colored}>13$</Text> — именно столько стоит
                        доступ
                        к образовательной платформе <Text type={'h32'}
                                                          className={s.description_item_colored}>Life$tyler</Text>
                    </Text>
                </div>

                <div className={s.price_content}>
                    <div className={s.book}>
                        <img src={book} alt=""/>
                    </div>
                    <div className={s.price_content_info}>
                        <Text type={'h32'} className={s.price_content_info_title}>
                            Небольшая инвестиция в себя, и вы получаете:
                        </Text>

                        <div className={s.content_price}>
                            {priceInfo?.map((el, i) => {
                                return <div className={s.price_item} key={i}>
                                    <Accept/>
                                    <Text className={s.price_item_title} style={{maxWidth: `${el.width}px`}}>
                                        {el.title}
                                    </Text>
                                </div>
                            })}
                        </div>
                    </div>
                </div>


                <div className={s.under_line}>
                    <Text type={'h48'} className={s.title}>
                        Мы научим Вас:
                    </Text>
                </div>

                <div className={s.teach_box}>
                    {teachInfo?.map((el, i) => {
                        return <div className={s.teach_item}>
                            <Text className={s.teach_text} style={{maxWidth: el.width}}>
                                {el.text}
                            </Text>
                            <p className={s.big_number}>{i + 1}</p>

                            <div className={s.teach_icon}>
                                {el.icon}
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Price;
