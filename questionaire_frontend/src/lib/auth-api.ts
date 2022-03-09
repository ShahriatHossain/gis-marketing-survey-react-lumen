import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants/common";
import { Login } from "../utils/models/Login";
import { TokenInfo } from "../utils/models/TokenInfo";
import { User } from "../utils/models/User";

export async function registerUser(userData: User) {
    const response = await fetch(`${BASE_URL}/register`, {
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

export async function loginUser(loginData: Login) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create user.');
    }

    const loadedTokenInfo = <TokenInfo>{
        ...data,
    };

    return loadedTokenInfo;
}
