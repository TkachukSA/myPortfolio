import React from 'react';
import s from './MyWorks.module.css'
import styles from './../comand/styles/Container.module.css'
import MyWork from "./work/MyWork";




function MyWorks() {
    return(


            <div className={s.skillsBlock}>
                <div className={`${styles.container} ${s.skillsContainer}`}>
                    <h2 className={s.title}>My works</h2>
                    <div className={s.skills}>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>

                        <MyWork title={'REACT'} description={'Todolist TypeScript'}/>
                    </div>
                </div>

            </div>



    )

}
export default MyWorks