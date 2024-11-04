import {Todos} from "@/components/Todos";
import {AddTodo} from "@/components/AddTodo";
import cls from './page.module.scss'

export default async function TodosPage() {
    return (
        <div className={cls.TodosContainer}>
            <h1 className={cls.TodosTitle}>TaskDo</h1>
            <AddTodo/>
            <Todos />
        </div>
    )
}