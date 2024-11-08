"use client"

import cls from './Todo.module.scss';
import {SyntheticEvent, useState} from "react";
import {Button} from "@/components/Button";
import {changeStatus, deleteTodo} from "@/components/Todo/actions";
import {TodoBodyStatus} from "@/components/AddTodo/actionTypes";
import {useInversedStatus} from "@/hooks/useInversedStatus";

interface TodoProps {
    id: number;
    title: string;
    status: string;
}


export const Todo = (props: TodoProps) => {
    const { id, status: serverStatus, title } = props;

    const [status, setStatus] = useState<TodoBodyStatus>(serverStatus as TodoBodyStatus)

    const onStatusChange = () => {
        setStatus(useInversedStatus(status))
        changeStatus(id, status)
    }

    const booleanStatus = status !== 'pending';

    const onDeleteHandler = () => {
        deleteTodo(id)
    }


    return (
        <div className={cls.Todo}>
            <button className={cls.DeleteButton} onClick={onDeleteHandler}>
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 6.16667H21M8.5 10.8333V17.8333M13.5 10.8333V17.8333M2.25 6.16667L3.5 20.1667C3.5 20.7855 3.76339 21.379 4.23223 21.8166C4.70108 22.2542 5.33696 22.5 6 22.5H16C16.663 22.5 17.2989 22.2542 17.7678 21.8166C18.2366 21.379 18.5 20.7855 18.5 20.1667L19.75 6.16667M7.25 6.16667V2.66667C7.25 2.35725 7.3817 2.0605 7.61612 1.84171C7.85054 1.62292 8.16848 1.5 8.5 1.5H13.5C13.8315 1.5 14.1495 1.62292 14.3839 1.84171C14.6183 2.0605 14.75 2.35725 14.75 2.66667V6.16667"
                        stroke="#777777" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <input type={"checkbox"} checked={booleanStatus} onChange={onStatusChange} className={cls.StatusCheckbox}/>
            <p className={`${cls[booleanStatus ? 'CompletedTodo' : null]} ${cls.TodoTitle}`}>{title}</p>
        </div>
    )
};
