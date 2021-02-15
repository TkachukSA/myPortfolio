import React from 'react';
import styles from './../comand/styles/Container.module.css'
import s from './Footer.module.css'
import {Title} from "../comand/title/Title";

function Footer() {
    return (
        <div className={s.footer} >
            <div className={s.footerContainer}>
                <Title title={'Segrey Tkachuk'}/>

                <div className={s.containerIcon}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>© 2021 Все права защищены</span>
            </div>

        </div>

    )
}

export default Footer