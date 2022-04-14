import { Question } from "./Question";

export interface Survey {
    id: number;
    name: string;
    description: string;
    private: boolean;
    active: boolean;
    created_at: string;
    updated_at: string;
    questions: Question[];
}