

import cls from './Button.module.scss'
import {ButtonHTMLAttributes, ReactElement} from "react";

type OmittedBtnType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>

export enum ButtonTypes {
    TEXT_BTN = 'TextBtn',
    ICON_BTN = 'IconBtn'
}

interface ButtonProps extends OmittedBtnType{
    children?: ReactElement,
    onClick?: () => void,
    disabled?: boolean,
    ButtonType?: ButtonTypes
}
export const Button = (props: ButtonProps) => {
    const {children, onClick, disabled, ButtonType = ButtonTypes.TEXT_BTN} = props

    return (
        <button className={`${cls.Button} ${cls[ButtonType]}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

