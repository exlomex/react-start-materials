export interface TodosInterface {
    id: number;
    user_id: number;
    title: string;
    due_on: null;
    status: string;
}

export async function fetchAllTodos<T extends TodosInterface[]>(): Promise<T> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, )

        if (!res.ok) throw new Error(res.statusText)

        const data = await res.json()

        return data as Promise<T>
    } catch (e) {
        console.log(e.message);

        return [] as Promise<T>
    }
}
