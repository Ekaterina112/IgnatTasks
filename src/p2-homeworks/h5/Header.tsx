import React from "react";
import {NavLink} from 'react-router-dom';
import s from  './Header.module.css'
import {PATH} from './Routes';
function Header() {
    return (
        <div>
                <nav className={s.nav}>
                <span className={s.item}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>PRE_JUNIOR</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>JUNIOR</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to={PATH.MIDDLE} activeClassName={s.activeLink}>MIDDLE</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to={PATH.SENIOR} activeClassName={s.activeLink}>SENIOR</NavLink>
                </span>
            </nav>

        </div>
    );
}

export default Header;
