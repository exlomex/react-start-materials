import React from 'react';
import cls from './MainPage.module.scss'
import {Button} from "components/Button";
import {USER_GUEST_KEY} from "../../consts/localStorage";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate()

    const StartBtnHandler = () => {
        // TODO откомментировать
        localStorage.setItem(USER_GUEST_KEY, String(false))
        navigate('/todos')
    }

    return (
        <div className={cls.MainPage}>
            <h1 className={cls.Title}>TaskDo</h1>
            <h2 className={cls.SubTitle}>Manage You Task Checklist Easily</h2>
            <Button ButtonType={'TextBtn'} onClick={StartBtnHandler}>Lets Start</Button>
        </div>
    )
}

