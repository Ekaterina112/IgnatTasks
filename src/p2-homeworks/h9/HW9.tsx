import React from "react";
import Clock from "./Clock";
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeStateType} from '../h12/bll/themeReducer';
import s from '../h12/HW12.module.css'
function HW9() {
    const state =useSelector<AppStoreType, ThemeStateType>(state => state.theme)
    return (

        <div className={s[state.theme]}>
            homeworks 9
            <hr/>
            {/*should work (должно работать)*/}

            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}

        </div>
    );
}

export default HW9;
