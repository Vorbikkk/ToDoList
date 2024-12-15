import React, { FC, useState } from 'react';
import { Post } from '../../../types/types';
import cl from './PostItem.module.css'
import ModalCompleted from '../../../UI/Modal/ModalCompleted';
import MyButton from '../../../UI/MyButton/MyButton';
import UpdatedFormPost from './UpdatedFormPost/UpdatedFormPost';

interface PostItemProps{
    post:Post
}    


const PostItem : FC<PostItemProps>= ({post}) => {
    const [completed,setCompleted]=useState<string>('')
    const [active,setActive]=useState<boolean>(false)
    const [upActive,setUpActive]=useState<boolean>(false)
    const ArrCss=[cl.postBlock]
    
    if(post.completed=== 'completed'){
        ArrCss.push(cl.greenBlock)
    }

    const addModal=(str:string)=>{
        setCompleted(str)
        setActive(true)
        console.log(post)
    }
    
    return (
        <div className={ArrCss.join(' ')} >
            <MyButton onClick={()=>addModal('completed')} color={'green'}>выполнено</MyButton>
            <div className={cl.textBlock} >{post.numberPost}.{post.title.slice(0,30)}</div>
            <UpdatedFormPost active={upActive} setActive={setUpActive} post={post} />
            <MyButton onClick={()=>addModal('delete')} color={'red'}>удалить</MyButton>
        <ModalCompleted  completed={completed} active={active} setActvie={setActive}  postId={post.id} />  
        </div>
    );
};

export default PostItem;