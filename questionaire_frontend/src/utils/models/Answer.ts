export interface Answer {
    id: number;
    answer_text: string;
    created_at: string;
    updated_at: string;
    question_id: number;
    multiple_choice_id: number | null;
}