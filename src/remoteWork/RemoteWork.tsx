import styles from './../comand/styles/Container.module.css'
import s from './RemoteWork.module.css'
import React from 'react';


function RemoteWork() {
    return (
        <div className={styles.container}>
            <div className={s.item}>
            <h3>Рассматриваю варианты удаленной работы</h3>
            <span>
                <button>Нанять меня</button>
            </span>

            </div>
        </div>
    )

}

export default RemoteWork