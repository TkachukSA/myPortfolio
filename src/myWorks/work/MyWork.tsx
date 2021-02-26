import React from 'react';
import style from './MyWork.module.scss'
import s from "../../remoteWork/RemoteWork.module.css";


function MyWork(props: { title: string, description: string, style: any, srcCode: any, src: any }) {
    return (


        <div className={style.preject}>

            <div className={style.image} style={props.style}>
                <a className={style.btn} target={"_blank"} href={props.src}>show</a>
            </div>

            <div className={style.projectInfo}>
                <h3 className={style.prejectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}<a target={"_blank"} href={props.srcCode}
                                                                          className={s.btn}>show code</a></span>
            </div>


        </div>


    )

}

export default MyWork