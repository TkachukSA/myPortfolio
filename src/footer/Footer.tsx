import React from 'react';
import s from './Footer.module.css'
import {Title} from "../comand/title/Title";

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <Title title={'Segrey Tkachuk'}/>

                <div className={s.containerIcon}>

                    <div><a href={''}>linkedin</a></div>
                    <div><a href={''}>github</a></div>
                    <div><a href={''}>codewars</a></div>
                    <div><a href={''}>facebook</a></div>
                </div>
                <span>© 2021 All rights reserved</span>
            </div>

        </div>

    )
}

export default Footer
