import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import moment from 'moment';


function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<string>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment().format('LTS'))
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = date; //getlocldate shablon //i installed "moment.js"//thanks for advice
    const stringDate = moment().subtract(10, 'days').calendar();

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
