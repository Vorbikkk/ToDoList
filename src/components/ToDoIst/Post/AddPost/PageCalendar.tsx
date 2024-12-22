import React, { FC, useEffect, useState } from 'react';
import cl from './PageCalendar.module.css'


interface PageCalendarProps {
    mounth: string[]
    daysInMonth: number[]
    days: number[]
    onClick:(e:any)=>void
}

const PageCalendar: FC<PageCalendarProps> = ({ mounth, daysInMonth, days }) => {
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [changeDays, setChangeDays] = useState(days)
    const [indexMounth, setIndexMounth] = useState(0)


    useEffect(()=>{ 
    correctedArray()
    },[indexMounth,year])

    const LeapYear = (year: number) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const correctedArray = () => {
        let daysInLeap = [...days]
        let copyDayInMonth=[...daysInMonth]
        copyDayInMonth[1] = LeapYear(year) ? 29 : 28
        let end = days.length - (days.length - copyDayInMonth[indexMounth])
        setChangeDays(daysInLeap.slice(0, end))

    }

    const changeYear=(sign:string)=>{
        if(year>2100 || year<2024){
            setYear(new Date().getFullYear())
            return false
        }
       sign ==="+" ? setYear(year+1) : setYear(year-1)
     
    }


    const changeMounth=(sign:string)=>{
        if(indexMounth>10 || indexMounth<0){
            setIndexMounth(0)
            return false
        }
       sign ==="+" ? setIndexMounth(indexMounth+1) : setIndexMounth(indexMounth-1)
    }


    return (
        <div className={cl.Calendar} onClick={(e)=>e.stopPropagation()}>
            <div className={cl.block_header}>
                <div className={cl.btn_slide} onClick={()=>changeYear('+')}>вперед</div>
                 <p>{year}</p>
                <div className={cl.btn_slide} onClick={()=>changeYear('-')}>назад</div>
            </div>
            <div className={cl.block_header}>
                <div className={cl.btn_slide} onClick={()=>changeMounth('+')}>вперед</div>
                 <p>{mounth[indexMounth]}</p>
                <div className={cl.btn_slide} onClick={()=>changeMounth('-')}>назад</div>
            </div>
              <div className={cl.container_day}>
                {changeDays.map(elem=>
                    <div className={cl.block_day} >{elem}</div>
                )}
              </div>

        </div>
    );
};

export default PageCalendar;