import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import st from './common/c7-SuperRange/SuperRange.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeStateType} from '../h12/bll/themeReducer';
import s from '../h12/HW12.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }
    const state =useSelector<AppStoreType, ThemeStateType>(state => state.theme)
    return (
        <div className={s[state.theme]}>
            homeworks 11
            <hr/>
            {/*should work (должно работать)*/}
            <div className={st.range}>
                <div>
                    <span className={s[state.theme + '-text']}>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                        // сделать так чтоб value1 изменялось
                    />
                    <span className={s[state.theme + '-text']}>{value2}</span>
                </div>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                />
            </div>

           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeSuperRange/>
            <AlternativeSuperDoubleRange/>
            <hr/>*/}
        </div>
    );
}

export default HW11;
