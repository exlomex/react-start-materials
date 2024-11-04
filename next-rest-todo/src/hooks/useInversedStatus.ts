import {TodoBodyStatus} from "@/components/AddTodo/actionTypes";

export function useInversedStatus(status) {
    return status === TodoBodyStatus.COMPLETED ? TodoBodyStatus.PENDING : TodoBodyStatus.COMPLETED;
}