import React from 'react';
import classes from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
            <div className={classes.canvas}>
                <img src={props.avatar} className={classes.ava}/>
                <div className={classes.form}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.message}>{props.message}</div>
                    <div className={classes.time}> {props.time} </div>
                </div>
                </div>
                );
                }

                export default Message;
