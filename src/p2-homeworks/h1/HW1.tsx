import React from "react";
import Message from './Message';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeStateType} from '../h12/bll/themeReducer';
import s from '../h12/HW12.module.css';

const messageData = {
    avatar: "https://klike.net/uploads/posts/2019-07/1564314090_3.jpg",
    name: "Kit Kat",
    message: "Whats up, bro?",
    time: "23:00",
};

function HW1() {
    const state =useSelector<AppStoreType, ThemeStateType>(state => state.theme)


    return (
        <div className={s[state.theme]}>

            homeworks 1
            <hr/>
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    );
}

export default HW1;
