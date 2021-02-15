import React from 'react';
import s from './Main.module.css'
import styles from './../comand/styles/Container.module.css'

function Main() {
    return(
        <div className={s.mainBlock}>

            <div className={`${styles.container} ${s.nainContainer}`}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>i am Sergey Tkachuk</h1>
                <p>frontend Developer</p>
            </div>
            <div className={s.photo}></div>
            </div>


        </div>
    )

}
export default Main