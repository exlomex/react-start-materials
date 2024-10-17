import cls from './Button.module.scss'
export const Button = (props) => {
    // ButtonType - IconBtn, TextBtn
    const {children, onClick, disabled, ButtonType = 'TextBtn'} = props

    return (
        <button className={`${cls.Button} ${cls[ButtonType]}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

