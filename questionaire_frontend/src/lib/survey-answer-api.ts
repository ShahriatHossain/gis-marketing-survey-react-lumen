import { BASE_URL } from "../utils/constants/common";
import { Answer } from "../utils/models/Answer";
import { getAuthorizedHeader, getBearerToken } from "../utils/helpers/utility-functions";

export async function getAllAnswers() {
    const response = await fetch(`${BASE_URL}/survey-answers`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch answers.');
    }

    const transformedAnswers = <Answer[]>[];

    for (const key in data) {
        const answerObj = {
            id: key,
            ...data[key],
        };

        transformedAnswers.push(<Answer>answerObj);
    }

    return transformedAnswers;
}

export async function getSingleAnswer(answerId: string) {
    const response = await fetch(`${BASE_URL}/survey-answers/${answerId}`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch answer.');
    }

    const loadedAnswer = <Answer>{
        id: answerId,
        ...data,
    };

    return loadedAnswer;
}

export async function addAnswer(answerData: Answer) {
    const response = await fetch(`${BASE_URL}/survey-answers`, {
        method: 'POST',
        body: JSON.stringify(answerData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create answer.');
    }

    return null;
}

export async function addMultiAnswer(answerData: Answer[]) {
    const response = await fetch(`${BASE_URL}/survey-answers/multi`, {
        method: 'POST',
        body: JSON.stringify({ answers: answerData }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create answer.');
    }

    return null;
}

export async function editAnswer(answerData: Answer) {
    const response = await fetch(`${BASE_URL}/survey-answers/${answerData.id}`, {
        method: 'PUT',
        body: JSON.stringify(answerData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit answer.');
    }

    return null;
}

export async function deleteAnswer(answerId: string) {
    const response = await fetch(`${BASE_URL}/survey-answers/${answerId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete answer.');
    }

    return null;
}
