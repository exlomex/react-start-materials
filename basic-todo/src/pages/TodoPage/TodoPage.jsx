import React, {useState} from 'react';
import cls from './TodoPage.module.scss'
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

export const TodoPage = (props) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'test', complete: false }
    ])
    const [taskText, setTaskText] = useState('')

    const handleAddTodo = (taskText) => () => {
        if (taskText.length) {
            const todo = {
                id: ((todos.at(-1).id) + 1),
                title: taskText,
                complete: false
            }
            setTodos([...todos, todo])
        }
    }

    const handleCompleteTodo = (id) => () => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete } : todo)
        setTodos(newTodos)
    }

    // const handleCompleteTodo = (id) => () => {
    //     setTodos(todos.map(todo => {
    //         if (todo.id === id) return {...todo, complete: !todo.complete}
    //         return todo
    //     }))
    // }

    const handleDeleteTodo = (id) => () => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className={cls.TodoPage}>
            <div className={cls.TodoContainer}>
                <h1 className={cls.todoHeader}>TaskDo</h1>
                <div className={cls.addLine}>
                    <Input placeholder={'Add a new task'} setValue={setTaskText} value={taskText}/>
                    <Button ButtonType={'IconBtn'} onClick={handleAddTodo(taskText)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.25 9C17.25 9.18234 17.1776 9.35721 17.0486 9.48614C16.9197 9.61507 16.7448 9.6875 16.5625 9.6875H9.6875V16.5625C9.6875 16.7448 9.61507 16.9197 9.48614 17.0486C9.35721 17.1776 9.18234 17.25 9 17.25C8.81766 17.25 8.6428 17.1776 8.51386 17.0486C8.38493 16.9197 8.3125 16.7448 8.3125 16.5625V9.6875H1.4375C1.25516 9.6875 1.0803 9.61507 0.951364 9.48614C0.822433 9.35721 0.75 9.18234 0.75 9C0.75 8.81766 0.822433 8.6428 0.951364 8.51386C1.0803 8.38493 1.25516 8.3125 1.4375 8.3125H8.3125V1.4375C8.3125 1.25516 8.38493 1.0803 8.51386 0.951364C8.6428 0.822433 8.81766 0.75 9 0.75C9.18234 0.75 9.35721 0.822433 9.48614 0.951364C9.61507 1.0803 9.6875 1.25516 9.6875 1.4375V8.3125H16.5625C16.7448 8.3125 16.9197 8.38493 17.0486 8.51386C17.1776 8.6428 17.25 8.81766 17.25 9Z"
                                fill="white"/>
                        </svg>
                    </Button>
                </div>

                <div className={cls.Todos}>
                    {todos.map(todo => (
                        <div className={cls.Todo} key={todo.id}>
                            <button
                                className={cls.deleteTodo}
                                onClick={handleDeleteTodo(todo.id)}
                            >
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 6.16667H21M8.5 10.8333V17.8333M13.5 10.8333V17.8333M2.25 6.16667L3.5 20.1667C3.5 20.7855 3.76339 21.379 4.23223 21.8166C4.70108 22.2542 5.33696 22.5 6 22.5H16C16.663 22.5 17.2989 22.2542 17.7678 21.8166C18.2366 21.379 18.5 20.7855 18.5 20.1667L19.75 6.16667M7.25 6.16667V2.66667C7.25 2.35725 7.3817 2.0605 7.61612 1.84171C7.85054 1.62292 8.16848 1.5 8.5 1.5H13.5C13.8315 1.5 14.1495 1.62292 14.3839 1.84171C14.6183 2.0605 14.75 2.35725 14.75 2.66667V6.16667" stroke="#777777" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <input type={"checkbox"} onClick={handleCompleteTodo(todo.id)} className={cls.todoCheckbox}/>

                            <div className={`${cls[todo.complete ? 'complete' : null]} ${cls.todoTitle}`}>{todo.title}</div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

