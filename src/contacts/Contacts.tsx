import React from 'react';
import s from './Contacts.module.css'
import styles from './../comand/styles/Container.module.css'
import {Title} from "../comand/title/Title";
import btn from '../remoteWork/RemoteWork.module.css'
import {useFormik} from 'formik';
import {api} from "../api/api";

export type FormikErrorType = {
    name?: string
    message?: string
    email?: string
}

function Contacts() {

    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
            name: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.message) {
                errors.message = 'Required';
            }
            return errors;
        },

        onSubmit: values => {
            /*dispatch(newPasswordTC(values.password, tokenValue))*/

            console.log(values)
            api.sendMessage(values.name, values.message, values.email).then(() => {
                alert('ok')
            })
            formik.resetForm()
        },

    })
    return (


        <div id="yak1" className={s.contactsBlock}>
            <div className={`${styles.container} ${s.contactsContainer}`}>
                <div className={s.contacts}>
                    <Title title={'Contacts'}/>
                    <form className={s.form} onSubmit={formik.handleSubmit}>
                        <input type={"text"}
                               {...formik.getFieldProps("name")}
                               placeholder={"name"}
                               onBlur={formik.handleBlur}
                               className={s.formcontrol}
                        />
                        {formik.touched.name && formik.errors.name ?
                            <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                        <input type={"text"}
                               {...formik.getFieldProps("email")}
                               placeholder={"email"}
                               onBlur={formik.handleBlur}
                               className={s.formcontrol}
                        />
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        <textarea
                            {...formik.getFieldProps("message")}
                            placeholder={'Your message'}
                            rows={7}
                            onBlur={formik.handleBlur}
                            className={s.formcontrol}/>
                        {formik.touched.message && formik.errors.message ?
                            <div style={{color: 'red'}}>{formik.errors.message}</div> : null}
                        <span className={btn.btnStyles}>
                             <button className={btn.btn}>Hire Me</button>
                        </span>
                    </form>

                </div>
            </div>

        </div>


    )

}

export default Contacts