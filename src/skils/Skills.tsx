import React from 'react';
import s from './Skills.module.css'
import styles from './../comand/styles/Container.module.css'
import Skill from "./skill/Skill";



function Skills() {
    return(


            <div className={s.skillsBlock}>
                <div className={`${styles.container} ${s.skillsContainer}`}>
                    <h2 className={s.title}>Skills</h2>
                    <div className={s.skills}>
                        <Skill title={'CSS'} description={'hello, '}/>
                        <Skill title={'HTML'} description={''}/>
                        <Skill title={'REACT'} description={''}/>
                    </div>
                </div>

            </div>



    )

}
export default Skills