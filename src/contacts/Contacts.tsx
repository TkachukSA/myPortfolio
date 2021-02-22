import React from 'react';
import s from './Contacts.module.css'
import styles from './../comand/styles/Container.module.css'
import {Title} from "../comand/title/Title";


function Contacts() {
    return (


        <div className={s.contactsBlock}>
            <div className={`${styles.container} ${s.contactsContainer}`}>

                <div className={s.contacts}>
                    <Title title={'Contacts'}/>
                    <form className={s.form}>
                        <label> <input type={'text'} placeholder={'name'} className={s.formcontrol}/></label>
                        <label> <input type={'email'} placeholder={'email'} className={s.formcontrol}/></label>
                        <label> <textarea placeholder={'Your message'} rows={7} className={s.formcontrol}/> </label>
                    </form>
                    <button>Отправить</button>
                </div>
            </div>

        </div>


    )

}

export default Contacts