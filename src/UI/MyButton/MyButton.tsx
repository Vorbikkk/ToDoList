import React, { FC } from 'react';
import cl from './MyButton.module.css'

interface ButtonProps{
onClick?:()=>void,
children:React.ReactNode
color?:string
}

const MyButton:FC<ButtonProps> = ({onClick,children,color}) => {
    return (
       <div className={cl.MyBtn} onClick={onClick} style={{background:color}}>
         {children}
       </div>
    );
};

export default MyButton;