import React from 'react';
import s from './Contacts.module.css'
import styles from './../comand/styles/Container.module.css'




function Contacts() {
    return(


        <div className={s.contactsBlock}>
            <div className={`${styles.container} ${s.contactsContainer}`}>

                <div className={s.contacts}>
                    <h2>Contacts</h2>

                    <form className={s.form}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button>Отправить</button>
                </div>
            </div>

        </div>



    )

}
export default Contacts