import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {requestAPI} from './RequestsAPI';



const Request: React.FC = () => {
    let [message,setMessage]=useState<string>('Here will be response')
  const [success, setSuccess]= useState<boolean>(true)
    const onchangeCallbackCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }
   const onchangeCallbackButton = () =>{
      console.log(success)
       requestAPI.postRequest(success).then(d=> setMessage(d.errorText))
    }
    return <>
        <div>
            <input type={'checkbox'} onChange={onchangeCallbackCheckbox} />
        </div>
        <div>
            <SuperButton onClick={onchangeCallbackButton}>PUSH</SuperButton>
            <div>
                {message}
            </div>
        </div>
    </>
}

export default Request;
