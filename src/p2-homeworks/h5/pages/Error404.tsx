import React from "react";
import s from  './../Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../Routes';



function Error404() {
    return (
        <div>
            <img src={require('./../../../grumpy-cat.jpg')}  alt="here is a cat" className={s.bg}/>
            <div className={s.homepage}> Please, return at
                <span>
                    <NavLink to={PATH.PRE_JUNIOR}> HOMEPAGE </NavLink>
                </span>
            </div>
        </div>
    );
}

export default Error404;
