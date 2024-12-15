import React, { FC,useState } from 'react';
import { Post } from '../../../types/types';
import PostItem from './PostItem';
import cl from './ListAdd.module.css'
import MyButton from '../../../UI/MyButton/MyButton';

interface ListAddProps{
    posts:Post[]
}


const ListAdd :FC<ListAddProps> = ({posts}) => {
    

    return (
        <div className={cl.list_add}>
            <div className={cl.box_center}>
            {posts.map(post=>
                <PostItem key={post.id} post={post}/>
            )}
            </div>
        </div>
    );
};

export default ListAdd;