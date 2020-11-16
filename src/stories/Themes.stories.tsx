import React, {useState} from 'react';
import SuperRadio from '../p2-homeworks/h7/common/c6-SuperRadio/SuperRadio';
import s from '../p2-homeworks/h12/HW12.module.css';
import {changeThemeAC} from '../p2-homeworks/h12/bll/themeReducer';

export default {
    title: 'SuperRadioWithTheme'
}

export const AddYellowTheme = () => {
    const themes = ['blue', 'red', 'green','yellow' ]
    let [theme, setTheme] = useState(themes[3])

    return (
        <div className={s[theme]}>
        <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={setTheme}
            />
        </div>
    );
}


