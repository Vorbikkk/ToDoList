import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group, Post } from "../../types/types";
import { RootState } from "../app/store";

export interface completed{
  id:number,
  completed:string
}
export interface updateData{
  postId:number
  postTitle:string
  groupId:number
}

const initialState: Post[] = []

export const PostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    
      updatecontent(state, action: PayloadAction<updateData>) {
        const data = action.payload
        let upPost = state.find(item => item.id === data.postId)
        if (upPost) {
          upPost.title = data.postTitle
          upPost.groupItemId=data.groupId
        }
      },
      updatecompleted(state, action: PayloadAction<completed>) {
       const  {id,completed}=action.payload
        let newCompleted = state.find(item => item.id === id)
        if (newCompleted) {
          newCompleted.completed = completed
        }
      }
    ,
    setPosts(state, action: PayloadAction<Post>){
      state.push(action.payload)
    },
    deletePost(state, action: PayloadAction<number>) {
      console.log(state)
      return state.filter(item => item.id !== action.payload)
    }
  }
  })

export const { setPosts, updatecontent, deletePost,updatecompleted } = PostSlice.actions
export default PostSlice.reducer


export const postSelect = (state: RootState) => state.posts
export const postSelectById = (state: RootState, postId: number) => state.posts.find(item => item.id === postId)

