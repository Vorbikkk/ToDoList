import React, { FC, useContext, useState } from 'react';
import cl from './ModalListGroup.module.css'
import Modal from '../../../../UI/Modal/Modal';
import  { Group } from '../../../../types/types';
import AddGroup from './AddGroup';
import { useAppDispatch, useAppSelector } from '../../../../appRedux/app/hooks';
import { groupSelect,AddItemGroup } from '../../../../appRedux/Slice/groupSlice';


export interface ListGroupProps{
active:boolean
setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ListGroup :FC<ListGroupProps> = ({active,setActive}) => {
     
    const dispatch=useAppDispatch()
    const group=useAppSelector(groupSelect)

    function AddGroupItem(elem:Group){
        dispatch(AddItemGroup(elem))
    }

   if(active===true){
    return (
       
        <div className={cl.block_group}  onClick={(e)=>e.stopPropagation()}>
            <div className={cl.close} onClick={()=>setActive(false)}></div>
            <AddGroup />
           {group.map(item=>
             <div onClick={()=>AddGroupItem(item)} key={item.id} className={cl.group_item}>
                {item.groupName}
            </div>
           
           )}
        </div>
);
   }
   return(
    <div style={{display:'none'}}></div>
   )
};

export default ListGroup;