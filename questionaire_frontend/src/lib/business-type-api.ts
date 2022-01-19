import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants/common";
import { BusinessType } from "../utils/models/BusinessType";

export async function getAllBusinessTypes() {
    const response = await fetch(`${BASE_URL}/business-types`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch business types.');
    }

    const transformedBusinessTypes = <BusinessType[]>[];

    for (const key in data) {
        const businessTypeObj = {
            id: key,
            ...data[key],
        };

        transformedBusinessTypes.push(<BusinessType>businessTypeObj);
    }

    return transformedBusinessTypes;
}

export async function getSingleBusinessType(businessTypeId: string) {
    const response = await fetch(`${BASE_URL}/business-types/${businessTypeId}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch business type.');
    }

    const loadedBusinessType = <BusinessType> {
        id: businessTypeId,
        ...data,
    };

    return loadedBusinessType;
}

export async function addBusinessType(businessTypeData: BusinessType) {
    const response = await fetch(`${BASE_URL}/business-types`, {
        method: 'POST',
        body: JSON.stringify(businessTypeData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create business type.');
    }

    return null;
}

export async function editBusinessType(businessTypeData: BusinessType) {
    const response = await fetch(`${BASE_URL}/business-types/${businessTypeData.id}`, {
        method: 'PUT',
        body: JSON.stringify(businessTypeData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit business type.');
    }

    return null;
}

export async function deleteBusinessType(businessTypeId: string) {
    const response = await fetch(`${BASE_URL}/business-types/${businessTypeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete business type.');
    }

    return null;
}
