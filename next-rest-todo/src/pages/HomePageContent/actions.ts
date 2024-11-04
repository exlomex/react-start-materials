"use server"

import {cookies} from "next/headers";
import {IS_GUEST} from "@/const/cookies";

export async function setGuestCookie() {
    const cookieStore = await cookies();
    cookieStore.set(IS_GUEST as any, 'true' as any);
}