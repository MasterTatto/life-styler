import React from 'react';
import s from './styles.module.css'
import Container from "../../../../components/container";
import Text from "../../../../common/text";

const Club = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.content}>
                    <div className={s.under_line}>
                    <Text type={'h48'} className={s.title}>
                        Личностный рост
                        <br/>
                        и эффективный бизнес с
                        &nbsp;
                        <Text type={'h48'} className={s.title_colored}>
                            Life$tyler
                        </Text>
                    </Text>
                    </div>

                    <Text className={s.sub_title}>
                        Мы разработали уникальную образовательную платформу: получайте профессиональные навыки и
                        зарабатывайте в матричном сетевом маркетинге одновременно.
                    </Text>

                    <div className={s.video}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fKopy74weus"
                                title="Imagine Dragons - Thunder" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className={s.under_line}>
                        <Text type={'h48'} className={s.title}>
                            Клуб
                            &nbsp;
                            <Text type={'h48'} className={s.title_colored}>
                                Life$tyler
                            </Text>
                        </Text>
                    </div>

                    <div className={s.description}>
                        <Text type={'p18'} className={s.description_item}>
                            Клуб Life$tyler — это сообщество людей, готовых совмещать личностный рост и профессиональную
                            деятельность. Мы предлагаем эффективные инструменты развития, которые можно применять на
                            практике в наших партнерских программах: курсы, мастер-классы от экспертов и постоянное
                            общение с единомышленниками — ваш залог успеха в любых начинаниях.
                        </Text>
                        <Text type={'p18'} className={s.description_item}>
                            Ведение Бизнеса в интернете — не просто умение продавать: уровень эрудиции, компьютерная
                            грамотность и понимание принципов прикладной психологии являются обязательными навыками для
                            любого успешного бизнеса. Начиная без них, можно дойти только до определённого уровня, так и
                            не попав в лидеры.
                        </Text>
                        <Text type={'p18'} className={s.description_item}>
                            Здесь профессионалы получат дополнительные знания и навыки, а новички — старт для роста в
                            матричном маркетинге.
                        </Text>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Club;
