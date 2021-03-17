import styles from './../comand/styles/Container.module.css'
import s from './RemoteWork.module.css'
import React from 'react';
import {Title} from "../comand/title/Title";


function RemoteWork() {
    return (
        <div className={`${styles.container} ${s.remoteContainer}`}>
            <div className={s.item}>
                    <Title title={'I Am Considering Remote Work Options'}/>

            <span className={s.btnStyles}>
                <button className={s.btn}>Hire me</button>
            </span>

            </div>
        </div>
    )

}

export default RemoteWork