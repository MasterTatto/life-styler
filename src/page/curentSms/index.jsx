import React, {useEffect, useRef} from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import Input from "../../common/input";
import Button from "../../common/button";

const CurrentChat = () => {

    const divRef = useRef(null);

    useEffect(() => {
        // Прокручиваем див вниз при загрузке страницы
        divRef.current.scrollTop = divRef.current.scrollHeight;
    }, []);
    return (
        <div className={s.main}>
            <TitleLk>
                Сообщения
            </TitleLk>

            <div className={s.content}>

                <div className={s.chat_box} ref={divRef}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map((el, i) => {
                        // {[1]?.map((el, i) => {
                        return <div className={s.chat_message} style={{
                            marginLeft: [1, 3, 5, 7, 9, 11, 13, 15].includes(el) && 'auto'
                        }}>
                            wow
                        </div>
                    })}
                </div>

                <div className={s.action_panel}>
                    <Input placeholder={'Введите сообщение'}/>
                    <div className={s.btn}>
                        <Button>ОТПРАВИТЬ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentChat;
