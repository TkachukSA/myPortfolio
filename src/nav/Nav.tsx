import React from 'react';
import s from './Nav.module.css'

function Nav() {
    return(
        <div className={s.nav}>

            <a href="#yak1">Контакты</a>
            <a href="#yak2">Проекты</a>
            <a href="#yak3">Скилы</a>
            <a href="#yak4">Главная</a>

        </div>
    )

}
export default Nav