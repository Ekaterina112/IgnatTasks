import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import s from './common/c7-SuperRange/SuperRange.module.css'


function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }
    return (
        <div>
            homeworks 11
            <hr/>
            {/*should work (должно работать)*/}
            <div className={s.range}>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                        // сделать так чтоб value1 изменялось
                    />
                    <span>{value2}</span>
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
