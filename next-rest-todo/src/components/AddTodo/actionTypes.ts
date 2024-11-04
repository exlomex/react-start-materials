export enum TodoBodyStatus {
    PENDING = 'pending',
    COMPLETED = 'completed'
}

export interface TodoBodyInterface {
    title: string;
    status: TodoBodyStatus;
}