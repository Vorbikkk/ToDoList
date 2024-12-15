import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Slice/postSlice'
import groupReducer from '../Slice/groupSlice'


export const store=configureStore({
    reducer: {
        posts:postReducer,
        group:groupReducer
      }
})


export type AppStore=typeof store
export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>

