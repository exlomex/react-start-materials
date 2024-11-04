"use server"

import {revalidateTag} from "next/cache";
import {useInversedStatus} from "@/hooks/useInversedStatus";

export async function deleteTodo(id: number) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`, {
            method: 'DELETE',
        })

        if (!res.ok) throw new Error(res.statusText)

        revalidateTag('Todos')

        return []
    } catch (e) {
        console.log(e.message);
        return []
    }
}

export async function changeStatus(id: number, status: string) {
    try {
        const inverseStatus = useInversedStatus(status)
        const todoBody = JSON.stringify({status: inverseStatus})

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`, {
            method: 'PATCH',
            body: todoBody
        })

        if (!res.ok) throw new Error(res.statusText)

        revalidateTag('Todos')

        return []
    } catch (e) {
        console.log(e.message);
        return []
    }
}