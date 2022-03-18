import { BASE_URL } from "../utils/constants/common";
import { Survey } from "../utils/models/Survey";
import { getAuthorizedHeader, getBearerToken } from "../utils/helpers/utility-functions";

export async function getAllSurveys() {
    const response = await fetch(`${BASE_URL}/surveys`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch surveys.');
    }

    const transformedSurveys = <Survey[]>[];

    for (const key in data) {
        const surveyObj = {
            id: key,
            ...data[key],
        };

        transformedSurveys.push(<Survey>surveyObj);
    }

    return transformedSurveys;
}

export async function getSingleSurvey(surveyId: string) {
    const response = await fetch(`${BASE_URL}/surveys/${surveyId}`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch survey.');
    }

    const loadedSurvey = <Survey> {
        id: surveyId,
        ...data,
    };

    return loadedSurvey;
}

export async function addSurvey(surveyData: Survey) {
    const response = await fetch(`${BASE_URL}/surveys`, {
        method: 'POST',
        body: JSON.stringify(surveyData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create survey.');
    }

    return null;
}

export async function editSurvey(surveyData: Survey) {
    const response = await fetch(`${BASE_URL}/surveys/${surveyData.id}`, {
        method: 'PUT',
        body: JSON.stringify(surveyData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit survey.');
    }

    return null;
}

export async function deleteSurvey(surveyId: string) {
    const response = await fetch(`${BASE_URL}/surveys/${surveyId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete survey.');
    }

    return null;
}
