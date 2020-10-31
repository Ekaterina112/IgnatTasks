import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import s from "./../h7/common/H7.module.css";
const arr = ['x', 'y', 'z'];


function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    const onChangeOptionHandler = (value: string) => {
        onChangeOption(value)
    }

    return (
        <div className={s.all}>
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
