import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../appRedux/app/hooks';
import { groupSelectById, groupSelect } from '../../../../appRedux/Slice/groupSlice';
import MyButton from '../../../../UI/MyButton/MyButton';
import MyInput from '../../../../UI/MyInput/MyInput';
import { Group } from '../../../../types/types';
import cl from './ListGroup.module.css'


export interface ListGroupProps {
    setIdGroup: React.Dispatch<React.SetStateAction<number>>
    elemGroup: Group
    setActiveGroup:React.Dispatch<React.SetStateAction<boolean>>
    activeGroup:boolean
}

const ListGroup: FC<ListGroupProps> = ({ setIdGroup, elemGroup,activeGroup,setActiveGroup }) => {

    const listGroup = useAppSelector(groupSelect)
    const [titleGroup, setTitleGroup] = useState<string>(elemGroup.groupName)
    const [group, setGroup] = useState<Group[]>([])

   

    const filterGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleGroup(e.target.value)
        setActiveGroup(true)
        console.log(titleGroup)
        setGroup(listGroup.filter(item =>
            item.groupName.includes(e.target.value)
        ))
    }
    function chooseGroup(item: Group) {
        setIdGroup(item.id)
        setTitleGroup(item.groupName)
        setActiveGroup(false)
        
    }

    return (
        <div onClick={(e)=>e.stopPropagation()}>
        
        <MyInput value={titleGroup} onFocus={()=>setActiveGroup(true)} onInput={(e) => filterGroup(e)} />
            <div>
                { activeGroup === true ?
                   <div className={cl.block_group}>
                     {
                        (group.length !== 0 &&  activeGroup === true) || titleGroup.length === 0  ?
                            group.map(item =>
                                <div onClick={() => chooseGroup(item)} className={cl.group_item}>{item.groupName}</div>
                            )
                            : <div className={cl.group_item}>пока ничего не найдено</div>
                    }
                   </div>
                   : <div style={{display:'none'}}></div>
                }
            </div>
        </div>
    );

};

export default ListGroup;