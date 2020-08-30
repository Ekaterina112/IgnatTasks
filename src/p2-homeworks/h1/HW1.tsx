import React from "react";
import Message from './Message';

const messageData = {
    avatar: "https://klike.net/uploads/posts/2019-07/1564314090_3.jpg",
    name: "Kit Kat",
    message: "Whats up, bro?",
    time: "23:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
