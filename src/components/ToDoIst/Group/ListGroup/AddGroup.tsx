import React, { FC, useState } from 'react';
import MyInput from '../../../../UI/MyInput/MyInput';
import { Group } from '../../../../types/types';
import MyButton from '../../../../UI/MyButton/MyButton';
import { useAppDispatch,useAppSelector } from '../../../../appRedux/app/hooks';
import { groupAll } from '../../../../appRedux/Slice/groupSlice';

 interface AddGroupProps{
   
}

const AddGroup:FC<AddGroupProps> = ({}) => {
     
     const dispatch=useAppDispatch()
     const [textGroup,setTextGroup]=useState<string>('')
     
     const Add=()=>{
        const newObj:Group={
           id:new Date().getTime(), 
           groupName:textGroup
        }
        
         setTextGroup(' ')
         dispatch(groupAll(newObj))
     }

    return (
        <div>
            <MyInput value={textGroup} onChange={(e)=>setTextGroup(e.target.value)} />
                <MyButton onClick={Add} > создать группу</MyButton>
        </div>
    );
};

export default AddGroup;