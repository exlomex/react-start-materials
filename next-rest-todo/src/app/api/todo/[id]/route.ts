import {accessToken} from "@/const/token";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    try {
        const res = await fetch(`https://gorest.co.in/public/v2/todos/${id}`, {
            headers: {
                'Authorization': accessToken
            },
            method: 'DELETE'
        })

        if (!res.ok) throw new Error(res.statusText)

        return Response.json({})
    } catch (e) {
        console.log(e.message);
        return Response.json({})
    }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    try {
        const body = await request.json();
        const res = await fetch(`https://gorest.co.in/public/v2/todos/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
            },
            method: 'PATCH',
            body: JSON.stringify(body)
        })

        if (!res.ok) throw new Error(res.statusText)

        return Response.json({})
    } catch (e) {
        console.log(e.message);
        return Response.json({})
    }
}