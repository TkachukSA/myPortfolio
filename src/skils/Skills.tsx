import React from 'react';
import s from './Skills.module.css'
import styles from './../comand/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../comand/title/Title";



function Skills() {
    return(


                <div className={s.skillsBlock}>
                    <div className={`${styles.container} ${s.skillsContainer} `}>
                        <Title title={'Skills'}/>
                        <div className={s.skills}>
                            <Skill title={'HTML'} description={'uhfpuafhe paughpau aprughpau h apuhgpua arughpah  rphauhpgu aruh phagru harughpagh ahrgpah'}/>
                            <Skill title={'css'} description={'uhfpuafhe paughpau aprughpau h apuhgpua arughpah  rphauhpgu aruh phagru harughpagh ahrgpah'}/>
                            <Skill title={'react'} description={'uhfpuafhe paughpau aprughpau h apuhgpua arughpah  rphauhpgu aruh phagru harughpagh ahrgpah'}/>
                            <Skill title={'js'} description={'uhfpuafhe paughpau aprughpau h apuhgpua arughpah  rphauhpgu aruh phagru harughpagh ahrgpah'}/>
                            <Skill title={'js'} description={'uhfpuafhe paughpau aprughpau h apuhgpua arughpah  rphauhpgu aruh phagru harughpagh ahrgpah'}/>

                        </div>
                    </div>
                </div>





    )

}
export default Skills