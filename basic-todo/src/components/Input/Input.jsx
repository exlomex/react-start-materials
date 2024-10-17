import cls from './Input.module.scss'
export const Input = (props) => {
    const {placeholder, setValue, value} = props

    const onChangeHandler = (e) => {
        setValue(e.target.value)
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

