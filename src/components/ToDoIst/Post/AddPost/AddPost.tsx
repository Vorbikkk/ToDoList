import React,{FC, useState} from 'react';
import MyInput from '../../../../UI/MyInput/MyInput';
import MyButton from '../../../../UI/MyButton/MyButton';
import { Post } from '../../../../types/types';
import cl from './AddPost.module.css'
import ModalListGroup from '../../Group/ListGroup/ModalListGroup';
import { useAppDispatch, useAppSelector } from '../../../../appRedux/app/hooks';
import { groupSelectById } from '../../../../appRedux/Slice/groupSlice';
import { setPosts,postSelect } from '../../../../appRedux/Slice/postSlice';
import Calendar from 'react-calendar'

interface AddPostProps{
    numberPost:number,
}


const AddPost:FC<AddPostProps> = ({numberPost}) => {

    const [title,setTitle]=useState<string>('')
    const posts=useAppSelector(postSelect)
    const [active,setActive]=useState<boolean>(false)
    const groupItem=useAppSelector(groupSelectById)
    const dispatch=useAppDispatch()

     
     
     const AddPost=()=>{
        const newObj:Post={
           id:new Date().getTime(), 
           numberPost,
           title,
           dataEnd:new Date().getTime(),
           completed:null,
           groupItemId:groupItem.id
        }      
        dispatch(setPosts(newObj))
        setTitle('')
     }

    return (
        <div className={cl.formAddPost}>
            <div className={cl.block_inline}>
               <MyInput value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
           <div className={cl.block_inline}>
           <MyButton onClick={()=>setActive(true)}>список групп</MyButton>
           <MyButton onClick={AddPost}>добавить</MyButton>
           <ModalListGroup active={active} setActive={setActive} />
           </div>
        </div>
    );
};

export default AddPost;