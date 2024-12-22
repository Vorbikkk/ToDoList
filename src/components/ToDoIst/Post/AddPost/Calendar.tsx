import React, { useState } from 'react';
import PageCalendar from './PageCalendar';
import Modal from '../../../../UI/Modal/Modal';
import cl from './Calendar.module.css'

const Calendar = () => {

    const [active, setActive] = useState<boolean>(false)

    const mounth = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    if (active === true) 
        return (
            <Modal active={active} setActvie={setActive}>
                    <PageCalendar onClick={(e)=>e.stopPropagation()} mounth={mounth} daysInMonth={daysInMonth} days={days} />
            </Modal>

        );
    
    return(
        <div onClick={()=>setActive(true)}  className={cl.calendar}> cal </div>
    )
};

export default Calendar;