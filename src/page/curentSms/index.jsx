import React, {useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
import TitleLk from "../../common/title_lk";
import Input from "../../common/input";
import Button from "../../common/button";
import {Avatar, IconButton, Menu} from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EmojiPicker from "emoji-picker-react";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

function isEven(number) {
    return number % 2 === 0;
}

const CurrentChat = () => {
    const divRef = useRef(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [messages, setMessages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    const [message, setMessage] = useState('')

    const handleAddedMessage = (text) => {
        setMessages([...messages, {text: message}])
        setMessage('')
        setTimeout(() => divRef.current.scrollTop = divRef.current.scrollHeight, 0)
    }

    useEffect(() => {
        // Прокручиваем див вниз при загрузке страницы
        divRef.current.scrollTop = divRef.current.scrollHeight;
    }, []);
    console.log(message)
    return (
        <div className={s.main}>
            <TitleLk>
                Сообщения
            </TitleLk>

            <div className={s.content}>

                <div className={s.chat_box} ref={divRef}>
                    {messages?.map((el, i) => {
                        // {[1]?.map((el, i) => {
                        return <div className={s.chat_message} style={{
                            marginLeft: isEven(i + 1) && 'auto'
                        }}>
                            <div className={s.item_top}>
                                <Avatar sx={{borderRadius: '0', width: '100px', height: '100px'}}/>
                                <div className={s.item_top_right}>
                                    <div className={s.item_top_right_left}>
                                        <p className={s.name}>Fenix</p>
                                        <p className={s.date_send}>12:31 &nbsp; 09.05.2022</p>
                                    </div>

                                    <div className={s.read_icon}>
                                        <DoneAllIcon sx={{
                                            width: '35px',
                                            height: 'auto',
                                            color: isEven(i + 1) ? 'rgba(196, 196, 196, 1)' : 'rgba(255, 102, 100, 1)'
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div className={s.item_bottom}>
                                <p>
                                    {el.text ? el.text : 'Онлайн-маркетинг быстро меняется, поэтому важно постоянно узнавать новые тенденции.\n' +
                                        '                                    В клубе Life$tyler доступ к образованию просто за смешные деньги! Это очень ценно и\n' +
                                        '                                    помогает мне в работе.'}

                                </p>
                            </div>
                        </div>
                    })}
                </div>

                <div className={s.action_panel}>
                    <Input onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleAddedMessage()
                        }
                    }} value={message} onChange={(e) => setMessage(e.target.value)}
                           placeholder={'Введите сообщение'}/>
                    {/*<PopupState variant="popover" popupId="demo-popup-menu">*/}
                    {/*    {(popupState) => (*/}
                    {/*        <React.Fragment>*/}
                    {/*            <Button variant="contained" {...bindTrigger(popupState)}>*/}
                    {/*                Dashboard*/}
                    {/*            </Button>*/}
                    {/*            <Menu {...bindMenu(popupState)}>*/}
                    {/*                <MenuItem onClick={popupState.close}>Profile</MenuItem>*/}
                    {/*                <MenuItem onClick={popupState.close}>My account</MenuItem>*/}
                    {/*                <MenuItem onClick={popupState.close}>Logout</MenuItem>*/}
                    {/*            </Menu>*/}
                    {/*        </React.Fragment>*/}
                    {/*    )}*/}
                    {/*</PopupState>*/}
                    <div>
                        <IconButton
                            onClick={handleClick}
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                        >
                            <AddReactionIcon sx={{color: 'rgba(255, 102, 100, 1)', height: '34px', width: '34px'}}/>
                        </IconButton>
                        <Menu
                            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                            transformOrigin={{vertical: 'bottom', horizontal: 'center'}}
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    borderRadius: '14px',
                                    '& .MuiList-root': {
                                        padding: '0px !important',
                                        borderRadius: '14px'
                                    }
                                }
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                        >
                            <EmojiPicker
                                emojiStyle={"google"}
                                skinTonesDisabled={true}
                                searchDisabled={true} open={true} width={350}
                                onEmojiClick={(a, b) => {
                                    console.log(message)
                                    setMessage((state) => state + a?.emoji)
                                    console.log(a, b)
                                }}
                            />
                        </Menu>
                    </div>
                    <div className={s.btn}>
                        <Button onClick={handleAddedMessage}>ОТПРАВИТЬ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentChat;
