"use server"

import {ReactNode} from "react";
import {cookies} from "next/headers";
import {IS_GUEST} from "@/const/cookies";
import {redirect} from "next/navigation";

export const IsGuest = async ({children}: {children: ReactNode}) => {
    if ((await cookies()).has(IS_GUEST)) {
        return redirect('/todos')
    }

    return (
        <>
            {children}
        </>
    )
}