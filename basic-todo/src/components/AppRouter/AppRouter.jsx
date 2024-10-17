import { Route, Routes } from "react-router-dom";
import { RequireGuest } from "components/RequireGuest";
import {MainPage} from "../../pages/MainPage";
import {TodoPage} from "../../pages/TodoPage";

export const AppRouter = () => (
    <Routes>
        <Route path="/" element={
            <RequireGuest>
                <MainPage/>
            </RequireGuest>
        }/>
        <Route path="/todos" element={
            <TodoPage/>
        }/>
    </Routes>
);

