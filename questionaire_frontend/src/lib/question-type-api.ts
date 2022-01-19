import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants/common";
import { QuestionType } from "../utils/models/QuestionType";

export async function getAllQuestionTypes() {
    const response = await fetch(`${BASE_URL}/question-types`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch question types.');
    }

    const transformedQuestionTypes = <QuestionType[]>[];

    for (const key in data) {
        const questionTypeObj = {
            id: key,
            ...data[key],
        };

        transformedQuestionTypes.push(<QuestionType>questionTypeObj);
    }

    return transformedQuestionTypes;
}

export async function getSingleQuestionType(questionTypeId: string) {
    const response = await fetch(`${BASE_URL}/question-types/${questionTypeId}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch question type.');
    }

    const loadedQuestionType = <QuestionType> {
        id: questionTypeId,
        ...data,
    };

    return loadedQuestionType;
}

export async function addQuestionType(questionTypeData: QuestionType) {
    const response = await fetch(`${BASE_URL}/question-types`, {
        method: 'POST',
        body: JSON.stringify(questionTypeData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create question type.');
    }

    return null;
}

export async function editQuestionType(questionTypeData: QuestionType) {
    const response = await fetch(`${BASE_URL}/question-types/${questionTypeData.id}`, {
        method: 'PUT',
        body: JSON.stringify(questionTypeData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit question type.');
    }

    return null;
}

export async function deleteQuestionType(questionTypeId: string) {
    const response = await fetch(`${BASE_URL}/question-types/${questionTypeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete question type.');
    }

    return null;
}
