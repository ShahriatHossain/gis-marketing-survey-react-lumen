import { BASE_URL } from "../utils/constants/common";
import { Question } from "../utils/models/Question";
import { getAuthorizedHeader, getBearerToken } from "../utils/helpers/utility-functions";

export async function getAllQuestions() {
    const response = await fetch(`${BASE_URL}/questions`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch questions.');
    }

    const transformedQuestions = <Question[]>[];

    for (const key in data) {
        const questionObj = {
            id: key,
            ...data[key],
        };

        transformedQuestions.push(<Question>questionObj);
    }

    return transformedQuestions;
}

export async function getSingleQuestion(questionData: any) {
    const response = await fetch(`${BASE_URL}/questions/${questionData.questionId}`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch question.');
    }

    const loadedQuestion = <Question>{
        id: questionData.questionId,
        ...data,
    };

    return loadedQuestion;
}

export async function addQuestion(questionData: Question) {
    const response = await fetch(`${BASE_URL}/questions`, {
        method: 'POST',
        body: JSON.stringify(questionData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create question.');
    }

    return null;
}

export async function editQuestion(questionData: Question) {
    const response = await fetch(`${BASE_URL}/questions/${questionData.id}`, {
        method: 'PUT',
        body: JSON.stringify(questionData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit question.');
    }

    return null;
}

export async function deleteQuestion(questionData: Question) {
    const response = await fetch(`${BASE_URL}/questions/${questionData.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete question.');
    }

    return null;
}
