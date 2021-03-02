import React from 'react';
import s from './Skills.module.css'
import styles from './../comand/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../comand/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import redux from '../asses/image/redux.png'
import ts from '../asses/image/ts.png'
import axios from '../asses/image/axios.png'
import {faReact, faJs, faGithub, faHtml5, faCss3Alt, faStripeS} from '@fortawesome/free-brands-svg-icons'
import {faTasks, faCloud} from '@fortawesome/free-solid-svg-icons'


function Skills() {
    const reduxImg = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'yellow',
        backgroundImage: `url(${redux})`,
    };
    const tsImg = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'yellow',
        backgroundImage: `url(${ts})`,
    };
    const axiosImg = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'yellow',
        backgroundImage: `url(${axios})`,
    };


    return (


        <div id="yak3" className={s.skillsBlock}>
            <div className={`${styles.container} ${s.skillsContainer} `}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faReact}/>}/>
                    <Skill title={'Git'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faGithub}/>}/>
                    <Skill title={'js'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faJs}/>}/>
                    <Skill title={'HTML'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faHtml5}/>}/>
                    <Skill title={'Unit tests'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faTasks}/>}/>
                    <Skill title={'CSS'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faCss3Alt}/>}/>
                    <Skill title={'Storybook'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faStripeS}/>}/>
                    <Skill title={'Rest API'}
                           icon={<FontAwesomeIcon size={'2x'} icon={faCloud}/>}/>
                    <Skill title={'Redux'} style={reduxImg}/>
                    <Skill title={'TypeScript'} style={tsImg}/>
                    <Skill title={'AXIOS'} style={axiosImg}/>

                </div>
            </div>
        </div>


    )

}

export default Skills