import React from 'react';
import s from './Title.module.css'


export const Title: React.FC<{ title: string }> = ({title}) => {
    return (
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    )

}

