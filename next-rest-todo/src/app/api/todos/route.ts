import {accessToken} from "@/const/token";

export async function GET() {
    try {
        const res = await fetch('https://gorest.co.in/public/v2/users/7504112/todos', {
            next: {tags: ['Todos']},
            headers: {
                'Authorization': accessToken
            },
        })

        if (!res.ok) throw new Error(res.statusText)

        const data = await res.json()

        return Response.json(data)
    } catch (e) {
        console.log(e.message);
        return Response.json({})
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    try {
        const res = await fetch('https://gorest.co.in/public/v2/users/7504112/todos', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        if (!res.ok) throw new Error(res.statusText)

        const data = await res.json()

        return Response.json(data)
    } catch (e) {
        console.log(e.message);
        return Response.json({})
    }
}