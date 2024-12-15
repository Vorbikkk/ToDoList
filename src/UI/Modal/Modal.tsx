import React, { FC } from 'react';
import cl from './Modal.module.css'

interface Modal{
    active: boolean
    setActvie: React.Dispatch<React.SetStateAction<boolean>>
    children:React.ReactNode
    backGround?:string
}


const Modal:FC<Modal> = ({active,setActvie,children,backGround}) => {

     const arrCss=[cl.Modal,backGround]

    if (active === true) {
        return (
            <div onClick={() => setActvie(false)} style={{backgroundColor:`${backGround}`}} className={arrCss.join(' ')}>
              {children}
            </div>
        );
    }
    return (
        <div style={{display:'none'}}></div>
    )
};

export default Modal;