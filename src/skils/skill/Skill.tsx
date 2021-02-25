import React from 'react';
import style from './Skill.module.css'


function Skill(props: { title: string, description?: string, icon?: any, style?: any }) {
    return (


        <div className={style.skill}>
            <div className={style.iconboxicon}>
                <div style={props.style} className={style.fa}>{props.icon}
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>


    )

}

export default Skill