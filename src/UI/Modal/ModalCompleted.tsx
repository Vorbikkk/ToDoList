import React, { FC } from 'react';
import cl from './ModalCompleted.module.css'
import MyButton from '../MyButton/MyButton';
import { Post } from '../../types/types';
import {deletePost,postSelectById,updatecompleted} from '../../appRedux/Slice/postSlice'
import { useAppDispatch,useAppSelector } from '../../appRedux/app/hooks';

interface ModalCompletedProps {
    completed: string
    active: boolean
    setActvie: React.Dispatch<React.SetStateAction<boolean>>
    postId:number
    
}

const ModalCompleted: FC<ModalCompletedProps> = ({ completed, active, setActvie ,postId}) => {
      const dispatch=useAppDispatch() 
      let post= useAppSelector((state)=>postSelectById(state,postId!))
      const answerModal=(completed:string)=>{
        setActvie(false)
        if(completed==='delete'){
            dispatch(deletePost(postId))
        }
        if(post && completed==='completed'){
            dispatch(updatecompleted({id:postId,completed:completed}))
        }
      }
     

    if (active === true) {
        return (
            <div onClick={() => setActvie(false)} className={cl.Modal}>
                <div onClick={(e) => e.stopPropagation()} className={cl.Modal_content}>
                    <p>вы уверены что хотите выбрать "{completed}"</p>
                    <div className={cl.btn_flex}>
                    <MyButton onClick={()=>answerModal(completed)}> да</MyButton>
                    <MyButton onClick={()=>setActvie(false)}>отмена</MyButton>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div></div>
    )
};

export default ModalCompleted;