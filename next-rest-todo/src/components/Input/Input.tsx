'use client'

import cls from './Input.module.scss'
import { InputHTMLAttributes} from "react";
import {ButtonTypes} from "@/components/Button/Button";

type OmittedInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'placeholder' | 'value'>

interface InputProps extends OmittedInputType{
    onChange?: (value: string) => void
    value?: string,
    placeholder?: string;
}

export const Input = (props: InputProps) => {
    const {placeholder, onChange, value} = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
            className={cls.Input}
        />
    )
}

