import React from 'react';
import s from './Projects.module.scss'
import styles from './../comand/styles/Container.module.css'
import MyWork from "./work/MyWork";
import {Title} from "../comand/title/Title";
import todo from  '../asses/image/todo.png'




function Projects() {
    const todolistImage = {
        color: 'blue',
        backgroundImage: `url(${todo})`,
    };

    return(
            <div className={s.skillsBlock}>
                <div className={`${styles.container} ${s.skillsContainer}`}>
                        <Title title={'Projects'}/>

                    <div className={s.skills}>
                        <MyWork style={todolistImage} title={'CSS'}  description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork style={todolistImage} title={'REACT'} description={'Todolist TypeScript'}/>
                    </div>
                </div>

            </div>



    )

}
export default Projects