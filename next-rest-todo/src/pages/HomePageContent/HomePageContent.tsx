"use client"

import cls from './HomePageContent.module.scss'
import {Button} from "@/components/Button";
import {useRouter} from 'next/navigation'
import {setGuestCookie} from "./actions";

export function HomePageContent() {
    const router = useRouter();

    const StartBtnHandler = () => {
        setGuestCookie();
        router.push('/todos');
    };

    return (
        <div className={cls.MainPage}>
            <h1 className={cls.Title}>TaskDo</h1>
            <h2 className={cls.SubTitle}>Manage You Task Checklist Easily</h2>
            <Button onClick={StartBtnHandler}>Lets Start</Button>
        </div>
    )
}