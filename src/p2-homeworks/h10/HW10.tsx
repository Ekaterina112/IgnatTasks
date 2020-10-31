import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {InitStateType, loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, InitStateType>(state => state.load)//piece of state
    const load = loading.isLoad
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)

    };

      return (
        <div>
            homeworks 10
            <hr/>
            {/*should work (должно работать)*/}
            {load
                ? (
                    <img src={require('./../../833.gif')}  alt="here is крутилка" />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
