import {fetchAllTodos} from "./actions";
import {Todo} from "@/components/Todo";

export const Todos = async () => {
    const todos = await fetchAllTodos()

    return (
        <>
            {
                todos && todos.map(todo => (<Todo key={todo.id} id={todo.id} title={todo.title} status={todo.status}/>))
            }
        </>
    )
}