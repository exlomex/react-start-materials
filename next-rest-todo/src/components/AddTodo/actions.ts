"use server"

import {TodosInterface} from "@/components/Todos/actions";
import {revalidateTag} from "next/cache";
import {TodoBodyInterface} from "./actionTypes";

export default async function AddTodoAction<T extends TodosInterface>(data: TodoBodyInterface): Promise<T> {
    try {
        const body = JSON.stringify(data)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: body
        })

        if (!res.ok) throw new Error(res.statusText)

        const newTodo = await res.json()

        revalidateTag('Todos')

        return newTodo as Promise<T>
    } catch (e) {
        console.log(e.message);

        return [] as Promise<T>
    }
}