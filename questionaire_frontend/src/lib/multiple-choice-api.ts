import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants/common";
import { MultipleChoice } from "../utils/models/MultipleChoice";

export async function getAllMultipleChoices() {
    const response = await fetch(`${BASE_URL}/multichoices`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch multichoices.');
    }

    const transformedMultipleChoices = <MultipleChoice[]>[];

    for (const key in data) {
        const multichoiceObj = {
            id: key,
            ...data[key],
        };

        transformedMultipleChoices.push(<MultipleChoice>multichoiceObj);
    }

    return transformedMultipleChoices;
}

export async function getSingleMultipleChoice(multichoiceId: string) {
    const response = await fetch(`${BASE_URL}/multichoices/${multichoiceId}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch multichoice.');
    }

    const loadedMultipleChoice = <MultipleChoice> {
        id: multichoiceId,
        ...data,
    };

    return loadedMultipleChoice;
}

export async function addMultipleChoice(multichoiceData: MultipleChoice) {
    const response = await fetch(`${BASE_URL}/multichoices`, {
        method: 'POST',
        body: JSON.stringify(multichoiceData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create multichoice.');
    }

    return null;
}

export async function editMultipleChoice(multichoiceData: MultipleChoice) {
    const response = await fetch(`${BASE_URL}/multichoices/${multichoiceData.id}`, {
        method: 'PUT',
        body: JSON.stringify(multichoiceData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit multichoice.');
    }

    return null;
}

export async function deleteMultipleChoice(multichoiceId: string) {
    const response = await fetch(`${BASE_URL}/multichoices/${multichoiceId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete multichoice.');
    }

    return null;
}
