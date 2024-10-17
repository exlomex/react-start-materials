import React, {useState} from 'react';
import cls from './TodoPage.module.scss'
import {Button} from "../../components/Button";
import AddSvg from 'assets/addSvg.svg'
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

    const handleDeleteTodo = (id) => () => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className={cls.TodoPage}>
            <div className={cls.TodoContainer}>
                <h1 className={cls.todoHeader}>TaskDo</h1>
                <div className={cls.addLine}>
                    <Input placeholder={'Add a new task'} setValue={setTaskText} value={taskText}/>
                    <Button ButtonType={'IconBtn'} onClick={handleAddTodo(taskText)}><img src={AddSvg} alt="+"/></Button>
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
                                    <path d="M1 6.16667H21M8.5 10.8333V17.8333M13.5 10.8333V17.8333M2.25 6.16667L3.5 20.1667C3.5 20.7855 3.76339 21.379 4.23223 21.8166C4.70108 22.2542 5.33696 22.5 6 22.5H16C16.663 22.5 17.2989 22.2542 17.7678 21.8166C18.2366 21.379 18.5 20.7855 18.5 20.1667L19.75 6.16667M7.25 6.16667V2.66667C7.25 2.35725 7.3817 2.0605 7.61612 1.84171C7.85054 1.62292 8.16848 1.5 8.5 1.5H13.5C13.8315 1.5 14.1495 1.62292 14.3839 1.84171C14.6183 2.0605 14.75 2.35725 14.75 2.66667V6.16667" stroke="#777777" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
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

