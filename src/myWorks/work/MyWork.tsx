import React from 'react';
import style from './MyWork.module.scss'


function MyWork(props: { title: string , description: string, style: any}) {
    return (


        <div className={style.preject}>

            <div className={style.image} style={props.style}>
                <a className={style.btn} href={''}>show</a>
            </div>

            <div className={style.projectInfo}>
                <h3 className={style.prejectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>



        </div>


    )

}

export default MyWork