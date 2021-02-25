import React from 'react';
import s from './Contacts.module.css'
import styles from './../comand/styles/Container.module.css'
import {Title} from "../comand/title/Title";
import btn from '../remoteWork/RemoteWork.module.css'


function Contacts() {
    return (


        <div className={s.contactsBlock}>
            <div className={`${styles.container} ${s.contactsContainer}`}>

                <div className={s.contacts}>
                    <Title title={'Contacts'}/>
                    <form className={s.form}>
                        <label> <input type={'text'} placeholder={'name'} className={s.formcontrol}/></label>
                        <label> <input  type={'email'} placeholder={'email'} className={s.formcontrol}/></label>
                        <label> <textarea placeholder={'Your message'} rows={7} className={s.formcontrol}/> </label>
                    </form>
                    <span className={btn.btnStyles}>
                <button className={btn.btn}>Hire Me</button>
            </span>
                </div>
            </div>

        </div>


    )

}

export default Contacts