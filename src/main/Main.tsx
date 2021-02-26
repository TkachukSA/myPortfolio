import React from 'react';
import s from './Main.module.css'
import styles from './../comand/styles/Container.module.css'
import me from '../asses/image/me.jpg'

function Main() {
    return(
        <div className={s.mainBlock}>

            <div className={`${styles.container} ${s.nainContainer}`}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>i am Sergey Tkachuk</h1>
                <p>Front-end Developer (React js)</p>
            </div>
            <div className={s.photo}>{<img src={me}/>}</div>
            </div>


        </div>
    )

}
export default Main