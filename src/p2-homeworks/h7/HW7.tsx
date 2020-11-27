import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeStateType} from '../h12/bll/themeReducer';
import st from '../h12/HW12.module.css'
const arr = ['x', 'y', 'z'];


function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    const onChangeOptionHandler = (value: string) => {
        onChangeOption(value)
    }
    const state =useSelector<AppStoreType, ThemeStateType>(state => state.theme)
    return (
        <div className={st[state.theme]}>
            homeworks 7
            <hr/>

            <hr/>
            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOptionHandler}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOptionHandler}
                />
            </div>

           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeSuperSelect/>
            <AlternativeSuperRadio/>
            <hr/>*/}
        </div>
    );
}

export default HW7;
