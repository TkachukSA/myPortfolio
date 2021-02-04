import React from 'react';
import style from './MyWork.module.css'


function MyWork(props: { title: string , description: string}) {
    return (


        <div className={style.preject}>

            <div className={style.image}>
                <a className={style.btn}>show</a>
            </div>

            <div className={style.projectInfo}>
                <h3 className={style.prejectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>



        </div>


    )

}

export default MyWork