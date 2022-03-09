import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants/common";
import { User } from "../utils/models/User";

export async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch users.');
    }

    const transformedUsers = <User[]>[];

    for (const key in data) {
        const userObj = {
            id: key,
            ...data[key],
        };

        transformedUsers.push(<User>userObj);
    }

    return transformedUsers;
}

export async function getSingleUser(userId: string) {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch user.');
    }

    const loadedUser = <User>{
        id: userId,
        ...data,
    };

    return loadedUser;
}

export async function getUserProfile() {
    const response = await fetch(`${BASE_URL}/profile`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch user.');
    }

    const loadedUser = <User>{
        ...data,
    };

    return loadedUser;
}

export async function addUser(userData: User) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create user.');
    }

    return null;
}

export async function editUser(userData: User) {
    const response = await fetch(`${BASE_URL}/users/${userData.id}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not edit user.');
    }

    return null;
}

export async function deleteUser(userId: string) {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not delete user.');
    }

    return null;
}
