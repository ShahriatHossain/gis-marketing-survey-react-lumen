import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants/common";
import { Customer } from "../utils/models/Customer";
import { getAuthorizedHeader, getBearerToken } from "../utils/helpers/utility-functions";

export async function getAllCustomers() {
    const response = await fetch(`${BASE_URL}/customers`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch customers.');
    }

    const transformedCustomers = <Customer[]>[];

    for (const key in data) {
        const customerObj = {
            id: key,
            ...data[key],
        };

        transformedCustomers.push(<Customer>customerObj);
    }

    return transformedCustomers;
}

export async function getSingleCustomer(customerId: string) {
    const response = await fetch(`${BASE_URL}/customers/${customerId}`, getAuthorizedHeader());
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch customer.');
    }

    const loadedCustomer = <Customer> {
        id: customerId,
        ...data,
    };

    return loadedCustomer;
}

export async function addCustomer(customerData: Customer) {
    const response = await fetch(`${BASE_URL}/customers`, {
        method: 'POST',
        body: JSON.stringify(customerData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create customer.');
    }

    return null;
}

export async function editCustomer(customerData: Customer) {
    const response = await fetch(`${BASE_URL}/customers/${customerData.id}`, {
        method: 'PUT',
        body: JSON.stringify(customerData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit customer.');
    }

    return null;
}

export async function deleteCustomer(customerId: string) {
    const response = await fetch(`${BASE_URL}/customers/${customerId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getBearerToken()
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete customer.');
    }

    return null;
}
