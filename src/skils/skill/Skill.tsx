import React from 'react';
import style from './Skill.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faHashtag} from '@fortawesome/free-solid-svg-icons'




function Skill(props: { title: string , description: string, icon?: string}) {
    return (


        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon size={'7x'} icon={faHashtag} />
            <i className="far fa-address-book"></i>
            <FontAwesomeIcon  icon={"check-square"}/>

            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>


    )

}

export default Skill