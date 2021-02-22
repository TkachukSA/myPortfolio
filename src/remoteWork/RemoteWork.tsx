import styles from './../comand/styles/Container.module.css'
import s from './RemoteWork.module.css'
import React from 'react';
import {Title} from "../comand/title/Title";


function RemoteWork() {
    return (
        <div className={`${styles.container} ${s.remoteContainer}`}>
            <div className={s.item}>
                    <Title title={'Рассматриваю варианты удаленной работы'}/>

            {/*<h3>Рассматриваю варианты удаленной работы</h3>*/}
            <span className={s.btnStyles}>
                <button className={s.btn}>Нанять меня</button>
            </span>

            </div>
        </div>
    )

}

export default RemoteWork