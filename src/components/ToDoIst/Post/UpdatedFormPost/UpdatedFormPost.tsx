import React, { FC, useEffect, useState } from 'react';
import Modal from '../../../../UI/Modal/Modal';
import MyButton from '../../../../UI/MyButton/MyButton';
import MyInput from '../../../../UI/MyInput/MyInput';
import cl from './UpdateFormPost.module.css'
import { Group, Post } from '../../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../appRedux/app/hooks';
import { groupAll, groupSelectById } from '../../../../appRedux/Slice/groupSlice';
import { updatecontent } from '../../../../appRedux/Slice/postSlice';
import ListGroup from './ListGroup';


interface UpdatedFormPostProps{
active:boolean
setActive: React.Dispatch<React.SetStateAction<boolean>>
post:Post
}

const UpdatedFormPost:FC<UpdatedFormPostProps> = ({active,setActive,post}) => {

    const [title, setTitle] = useState<string>(post.title)
    const elemGroup=useAppSelector(groupSelectById)
    const [IdGroup, setIdGroup] = useState<number>(elemGroup.id)
    const [activeGroup, setActiveGroup] = useState<boolean>(false)
    const dispatch = useAppDispatch()
   

    const updatedPost=()=>{
        dispatch(updatecontent({postId:post.id,postTitle:title,groupId:IdGroup}))
        setActive(false)
    }
    const list_not=(e:any)=>{
        e.stopPropagation()
        setActiveGroup(false)
    }


    if(active===true)
    return (
        <Modal active={active} setActvie={setActive}>
            <div onClick={(e)=>list_not(e)} className={cl.formUpdatePost}>
                <h4>редактирвоание поста</h4>
                <p>название группы</p>               
                <ListGroup setActiveGroup={setActiveGroup} activeGroup={activeGroup} setIdGroup={setIdGroup} elemGroup={elemGroup} />
                <p>текст поста</p>
                <MyInput value={title} onChange={(e) => setTitle(e.target.value)} />
                <MyButton onClick={()=>updatedPost()} >редактировать</MyButton>
                <MyButton onClick={()=>setActive(false)} >отмена</MyButton>
            </div>
        </Modal>
    );
    return(
        <MyButton onClick={()=>setActive(true)} >ред</MyButton>
    )
};

export default UpdatedFormPost;