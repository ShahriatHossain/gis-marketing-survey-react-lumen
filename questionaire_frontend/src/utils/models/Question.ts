export interface Question {
    id: number;
    survey_id: number;
    title: string;
    description: string;
    question_type: string;
    required: boolean;
    survey_name: string;
    question_type_description: string;
    created_at: string;
    updated_at: string;
}