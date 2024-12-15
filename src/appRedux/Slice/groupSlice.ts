import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Group } from "../../types/types";
import { RootState } from "../app/store";

export interface GroupSlice{
    allGroup:Array<Group>,
    groupElem:Group 
}

const initialState:GroupSlice={allGroup:[{id:new Date().getTime(),groupName:'входящие'}],groupElem:{id:new Date().getTime(),groupName:'входящие'}}

const groupSlice=createSlice({
    name:'group',
    initialState,
    reducers:{
        groupAll(state,action:PayloadAction<Group>){
            state.allGroup.push(action.payload)
        },
        AddItemGroup(state,action:PayloadAction<Group>){
           const {id,groupName}=action.payload
           state.groupElem={id:id,groupName:groupName}
        }
      
    }
})

export const {groupAll,AddItemGroup}=groupSlice.actions
export default groupSlice.reducer

export const groupSelect=(state:RootState)=>state.group.allGroup
export const groupSelectById=(state:RootState)=>state.group.groupElem