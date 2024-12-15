import React,{FC} from 'react';
import cl from './Input.module.css'

interface InputProps{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    onInput?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    onFocus?:(e:React.FocusEvent<HTMLInputElement>)=>void
    onBlur?:(e:React.FocusEvent<HTMLInputElement>)=>void
    value:string
}


const MyInput:FC<InputProps> = ({value,onChange,onInput, onFocus,onBlur}) => {
    return (
        <input type="text" className={cl.InputForm} onInput={onInput} onBlur={onBlur}  onFocus={onFocus} value={value}  onChange={onChange}/>
    );
};

export default MyInput;