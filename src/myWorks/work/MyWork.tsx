import React from 'react';
import style from './MyWork.module.css'


function MyWork(props: { title: string , description: string}) {
    return (


        <div className={style.skill}>

            <div className={style.icon}><button>show</button></div>

            <div className={style.description}>{props.title}</div>
            <div className={style.description}>{props.description}</div>


        </div>


    )

}

export default MyWork