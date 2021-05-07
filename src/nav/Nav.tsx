import React from 'react';
import s from './Nav.module.css'

function Nav() {
    return(
        <div className={s.nav}>

            <a href="#yak1">Contacts</a>
            <a href="#yak2">Projects</a>
            <a href="#yak3">Skills</a>
            <a href="#yak4">Me</a>

        </div>
    )

}
export default Nav
