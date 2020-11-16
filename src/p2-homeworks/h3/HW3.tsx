import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from 'uuid';
import s from '../h12/HW12.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeStateType} from '../h12/bll/themeReducer';
// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback= (name: string) => {
        let newUser: UserType = {_id: v1(), name: name}
        setUsers([newUser,...users]); // need to fix
    }
    const state =useSelector<AppStoreType, ThemeStateType>(state => state.theme)

    return (
        <div className={s[state.theme]}>
            homework 3
            <hr/>
            Enter Your Name
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}  />

           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeGreeting/>
            <hr/>*/}
        </div>
    );
}

export default HW3;
