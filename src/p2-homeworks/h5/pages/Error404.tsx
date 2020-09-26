import React from "react";
import s from  './../Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../Routes';



function Error404() {
    return (
        <div>
            <img src="https://pixel-one.ru/uploads/posts/2017-10/1508524003_grumpy-cat.jpg"  alt="here is cat" className={s.bg}/>
            <div className={s.homepage}> Please, return at
                <span>
                    <NavLink to={PATH.PRE_JUNIOR}> HOMEPAGE </NavLink>
                </span>
            </div>
        </div>
    );
}

export default Error404;
