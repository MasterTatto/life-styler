import React from 'react';
import s from './styles.module.css'
import Container from "../../components/container";
import Text from "../../common/text";
import img from '../../assetss/book.png'
import Button from "../../common/button";

const data = [
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        img: img
    },
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        img: img
    },
    {
        title: '«Бизнес в сети»',
        sub_title: 'Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        img: img
    },
]
const Course = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.under_line}>
                    <Text type={'h48'} className={s.title}>
                        Курсы
                    </Text>
                </div>

                <div className={s.content}>
                    {data?.map((el, i) => {
                        return <div className={s.item} key={i}>
                            <div className={s.item_left}>
                                <Text type={'h32'} className={s.item_title}>{el.title}</Text>
                                <Text type={'p18'} className={s.item_sub_title}>{el.sub_title}</Text>

                                <div className={s.btns}>
                                    <Button variant={2} className={s.dark_btn}>ПЕРЕЙТИ</Button>
                                    <Button>Купить</Button>
                                </div>
                            </div>
                            <div className={s.item_right}>
                                <img src={el.img} alt={el.title}/>
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Course;