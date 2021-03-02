import React from 'react';
import s from './Header.module.css'
import Nav from "../nav/Nav";

function Header() {
    return(
        <div id="yak4" className={s.header}>
            <Nav/>
        </div>
    )

}
export default Header