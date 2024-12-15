import React, { FC,useEffect,useState } from 'react';
import { Post } from '../../../types/types';
import cl from './ToDoList.module.css'
import AddPost from './AddPost/AddPost';
import ListAdd from './ListAdd';
import { Group } from '../../../types/types';
import { useAppSelector } from '../../../appRedux/app/hooks';
import {postSelect} from '../../../appRedux/Slice/postSlice'
import { groupSelectById } from '../../../appRedux/Slice/groupSlice';


const ToDoList:FC = () => {
const posts=useAppSelector(postSelect)
const [listPosts,setListPosts]=useState<Post[]>([])
const numberPost:number=posts.length === 0 ? 1 : posts[posts.length-1].numberPost+1
const groupItem:Group =useAppSelector(groupSelectById)

useEffect(()=>{

    setListPosts(posts.filter(post=>post.groupItemId===groupItem.id))
     
},[posts,groupItem])

console.log(listPosts)

    return (
      
          <div>
            <AddPost numberPost={numberPost} />
            <h1 style={{textAlign:'center'}}>{groupItem.groupName}</h1>
            <ListAdd posts={listPosts}  />
        </div>
      
    );
};

export default ToDoList;