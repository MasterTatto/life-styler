import React, {useState} from 'react';
import s from './styles.module.css'
import Container from "../../../../components/container";
import Text from "../../../../common/text";
import {ReactComponent as ArrowIcon} from "../../../../assetss/svg/arrowSwipper.svg";
import classNames from "classnames";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {ReactComponent as EyeIcon} from "../../../../assetss/svg/eye.svg";
import moment from "moment";
import {useMediaQuery} from "@mui/material";

const news = [
    {
        img: "https://picsum.photos/id/1/200/300",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tellus ut magna hendrerit, quis facilisis libero fringilla. Fusce aliquam eros id magna dapibus gravida. Proin dignissim pharetra lectus, sit amet sagittis felis vestibulum a. Integer in ligula id justo tempor efficitur. Nullam et nisi at ante vehicula maximus ut sed velit. Mauris rhoncus dui vitae ante volutpat lobortis. Sed ullamcorper libero nisl, nec sodales mi egestas ut. Donec vel velit at turpis vestibulum fermentum. Nulla facilisi. Vivamus sodales efficitur justo non tristique.",
        date: "2024-05-01",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/2/200/300",
        text: "Duis sit amet efficitur metus. Ut nec risus ligula. Sed et hendrerit libero. Vivamus non nunc eget eros hendrerit euismod a nec lorem. Ut quis fringilla mi, at convallis justo. Ut dictum augue eget eros fringilla egestas. Sed malesuada eu nisi ac ultrices. Integer id semper felis. Curabitur non nunc tempor, cursus nisi id, viverra dui. Cras ac erat vitae mauris egestas convallis. Donec fringilla ligula vel eleifend euismod. Nam pulvinar urna id turpis molestie lacinia.",
        date: "2024-04-29",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/3/200/300",
        text: "Fusce volutpat felis nec sem volutpat, vitae volutpat nisi consequat. Maecenas vehicula mi non nisl tincidunt, in varius mauris eleifend. Nulla facilisi. Mauris a consequat nunc. In hac habitasse platea dictumst. Nullam sollicitudin, nisi nec condimentum sodales, leo metus scelerisque nulla, nec dapibus quam purus in sem. Mauris vulputate, purus a laoreet aliquet, sapien odio volutpat magna, in pharetra nisi odio sit amet libero. Vivamus suscipit non eros at ullamcorper.",
        date: "2024-04-27",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/4/200/300",
        text: "Curabitur at justo et ipsum auctor interdum non ac erat. Cras eu velit leo. Nulla luctus magna at felis tincidunt, a iaculis dui lacinia. Mauris condimentum vestibulum mi vel mattis. Integer vitae libero vel metus lacinia ullamcorper. Proin at purus eget est posuere dapibus. Fusce luctus odio eget ipsum suscipit, quis tincidunt mauris commodo. Sed consectetur eros at velit varius, a hendrerit nunc suscipit.",
        date: "2024-04-25",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/5/200/300",
        text: "Proin dignissim, nisi sit amet pellentesque fermentum, enim eros rutrum mauris, vel interdum ligula odio at lorem. Duis gravida aliquam odio, sed gravida quam ultricies vitae. Aliquam euismod sodales velit nec facilisis. Nulla facilisi. Suspendisse potenti. Curabitur sit amet odio id mi pellentesque fermentum ac sit amet urna. Duis id ultrices arcu. Ut ultricies vestibulum ultricies. Sed id est nec magna convallis varius. Nulla facilisi.",
        date: "2024-04-23",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/6/200/300",
        text: "Sed sit amet dictum turpis, sit amet scelerisque lorem. Nunc placerat enim vel gravida tincidunt. Sed in dolor feugiat, egestas libero nec, faucibus justo. Integer eget eros tortor. In auctor facilisis leo, in interdum ligula cursus vel. Phasellus semper mauris eget ligula interdum ultrices. In id orci non elit ultrices accumsan.",
        date: "2024-04-21",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/7/200/300",
        text: "Vivamus tempor, mi et maximus auctor, nulla metus vestibulum lorem, at placerat justo purus at nisl. Nulla facilisi. Suspendisse dapibus mi ac vehicula bibendum. Nam feugiat vel libero nec euismod. Maecenas nec nisl nec sem vestibulum hendrerit. Duis nec ipsum vel sapien fermentum consequat. Integer malesuada, arcu nec faucibus gravida, quam enim finibus tortor, non varius enim diam quis lorem. Integer sit amet turpis in mi posuere ultricies.",
        date: "2024-04-19",
        views: Math.floor(Math.random() * 1000)
    },
    {
        img: "https://picsum.photos/id/8/200/300",
        text: "In fermentum vehicula lectus, nec molestie risus scelerisque at. Duis semper vel purus id vulputate. Vivamus id eleifend nisl, eget tempus urna. Vivamus fringilla diam vel vestibulum consequat. Phasellus ut tortor eu tortor iaculis condimentum. Integer id libero at sem condimentum ultricies nec et odio. Donec nec convallis lectus.",
        date: "2024-04-17",
        views: Math.floor(Math.random() * 1000)
    }
];

const News = () => {
    const matches = useMediaQuery('(max-width:768px)');

    const [directionType, setDirectionType] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState();

    const handleArrowClick = (direction) => {
        if (!directionType) {
            setDirectionType(direction);
            setTimeout(() => setDirectionType(null), 800)
        }
    };

    return (
        <div className={s.main}>
            <Container>
                <div className={s.header}>
                    <div className={s.under_line}>
                        <Text type={'h48'} className={s.title}>
                            Новости компании
                        </Text>
                    </div>

                    <div className={s.navigate}>
                        <div className={classNames(s.arrow, s.arrow_left, activeIndex === 0 && s.disabled)}
                             onClick={() => {
                                 if (activeIndex === 0) return
                                 handleArrowClick('left')
                                 swiper?.slidePrev()
                             }}>
                            <ArrowIcon/>
                        </div>
                        <div className={s.dots}>
                            <div
                                className={classNames(s.dot_active, directionType === 'left' && s.dot_active_left, directionType === 'right' && s.dot_active_right)}/>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className={classNames(s.dot)}/>
                            ))}
                        </div>
                        <div
                            className={classNames(s.arrow, s.arrow_right, news?.length - 1 === activeIndex + (matches ? 0 : 2) && s.disabled)}
                            onClick={() => {
                                if (news?.length - 1 === activeIndex + (matches ? 0 : 2)) return
                                handleArrowClick('right')
                                swiper?.slideNext()
                            }}>
                            <ArrowIcon/>
                        </div>
                    </div>
                </div>

                <div className={s.swipper}>
                    <Swiper
                        style={{
                            paddingBottom: '1px'
                        }}
                        spaceBetween={matches ? 30 : 50}
                        slidesPerView={matches ? 1.2 : 3}

                        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {news?.map((el, i) => {
                            return <SwiperSlide key={i}>
                                <div className={s.item}>
                                    {/*<Avatar src={el.img} sx={{width:'100%',borderRadius:'0',height:'250px'}}/>*/}
                                    <div className={s.bg} style={{
                                        backgroundImage: `url(${el.img})`
                                    }}/>

                                    <div className={s.info}>
                                        <Text className={s.description}>
                                            {el.text}
                                        </Text>

                                        <div className={s.date_info}>
                                            <div className={s.date}>
                                                <Text type={'p12'} className={s.date_value}>
                                                    {moment(el.date)?.format('HH:mm')}
                                                </Text>
                                                <Text type={'p12'} className={s.date_value}>
                                                    {moment(el.date)?.format('DD.MM.YYYY')}
                                                </Text>
                                            </div>

                                            <div className={s.view}>
                                                <EyeIcon/>
                                                <Text type={'p12'} className={s.count}>
                                                    {el.views}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default News;
