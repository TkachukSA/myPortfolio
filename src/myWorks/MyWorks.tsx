import React from 'react';
import s from './MyWorks.module.css'
import styles from './../comand/styles/Container.module.css'
import MyWork from "./work/MyWork";




function MyWorks() {
    return(


            <div className={s.skillsBlock}>
                <div className={`${styles.container} ${s.skillsContainer}`}>
                    <div  className={s.title}>
                        <h2>Projects</h2>
                    </div>

                    <div className={s.skills}>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSk ridfvxzn vjfbnvzjdbflvzblhzb pt hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>
                        <MyWork title={'CSS'} description={'SocialNetwork typeSkript hlgv klhlhvg klkgv lhgvlghv g vkhg v vk vkgv g vgvg '}/>

                        <MyWork title={'REACT'} description={'Todolist TypeScript'}/>
                    </div>
                </div>

            </div>



    )

}
export default MyWorks