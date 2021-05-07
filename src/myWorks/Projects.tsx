import React from 'react';
import s from './Projects.module.scss'
import styles from './../comand/styles/Container.module.css'
import MyWork from "./work/MyWork";
import {Title} from "../comand/title/Title";
import todo from '../asses/image/todo.png'
import soc from '../asses/image/social.png'
import component from '../asses/image/present.png'
import counter from '../asses/image/counter.png'
import welbex from '../asses/image/welbex.png'


type ProjectsType={
    todolist : { title: string, srcCode:string, style: any, description: string, src:string}
    socialNetwork : { title: string, srcCode:string, style: any, description: string, src:string}
    hwIgnat : { title: string, srcCode:string, style: any, description: string, src:string}
    counterRedux : { title: string, srcCode:string, style: any, description: string, src:string}
    welbex : { title: string, srcCode:string, style: any, description: string, src:string}
}
const welbexImage = {
    color: 'blue',
    backgroundImage: `url(${welbex})`,
};
const todolistImage = {
    color: 'blue',
    backgroundImage: `url(${todo})`,
};
const socialNetPng = {
    color: 'blue',
    backgroundImage: `url(${soc})`,
}
;const componentPng = {
    color: 'blue',
    backgroundImage: `url(${component})`,
};
const counterPng = {
    color: 'blue',
    backgroundImage: `url(${counter})`,
};

let projects:ProjectsType = {
    todolist:{
        title:'Todolist',
        srcCode: 'https://github.com/asa121asa/Todolist_v2',
        style:todolistImage,
        description:'The project was developed using:  React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, StoryBook, Unit Tests',
        src:'https://asa121asa.github.io/Todolist_v2/'
    },
    socialNetwork:{
        title:'Social network',
        srcCode: 'https://github.com/asa121asa/samuraiTS',
        style:socialNetPng,
        description:'The project was developed using:  React, Redux, TypeScript, Redux-form, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, Unit Tests',
        src:'https://asa121asa.github.io/samuraiTS/'
    },
    hwIgnat:{
        title:'Presentation components',
        srcCode: 'https://github.com/asa121asa/homeworks-Ignat',
        style:componentPng,
        description:'The project was developed using:  React, Redux, TypeScript,  React Hooks, Axios, Browser-Router, Unit Tests',
        src:'https://asa121asa.github.io/homeworks-Ignat/'
    },
    counterRedux:{
        title:'Counter with Redux',
        srcCode: 'https://github.com/asa121asa/CounterWithRedux',
        style:counterPng,
        description:'The project was developed using:  React, Redux, TypeScript,  React Hooks',
        src:'https://asa121asa.github.io/CounterWithRedux/'
    },
    welbex:{
        title:'Cards',
        srcCode: 'https://github.com/asa121asa/test_homework_inmedia',
        style:welbexImage,
        description:'The project was developed using:  React, TypeScript, React Hooks, react-three-fiber, react-tilt',
        src:'https://asa121asa.github.io/test_homework_inmedia/'
    }
}

function Projects() {




    return (
        <div id="yak2" className={s.skillsBlock}>
            <div className={`${styles.container} ${s.skillsContainer}`}>
                <Title title={'Projects'}/>

                <div className={s.skills}>
                    <MyWork style={projects.todolist.style}
                            title={projects.todolist.title}
                            description={projects.todolist.description}
                            src={projects.todolist.src}
                            srcCode={projects.todolist.srcCode}
                    />
                    <MyWork style={projects.socialNetwork.style}
                            title={projects.socialNetwork.title}
                            description={projects.socialNetwork.description}
                            src={projects.socialNetwork.src}
                            srcCode={projects.socialNetwork.srcCode}
                    />
                    <MyWork style={projects.hwIgnat.style}
                            title={projects.hwIgnat.title}
                            description={projects.hwIgnat.description}
                            src={projects.hwIgnat.src}
                            srcCode={projects.hwIgnat.srcCode}
                    />
                    <MyWork style={projects.counterRedux.style}
                            title={projects.counterRedux.title}
                            description={projects.counterRedux.description}
                            src={projects.counterRedux.src}
                            srcCode={projects.counterRedux.srcCode}
                    />
                    <MyWork style={projects.welbex.style}
                            title={projects.welbex.title}
                            description={projects.welbex.description}
                            src={projects.welbex.src}
                            srcCode={projects.welbex.srcCode}
                    />




                </div>
            </div>
        </div>


    )

}

export default Projects