import React, { useState, useEffect, useCallback } from 'react';
import { TokenInfo } from '../utils/models/TokenInfo';
import { User } from "../utils/models/User";

let logoutTimer: any;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  profile: undefined,
  login: (token: TokenInfo) => { },
  logout: () => { },
  setProfile: (profile: User) => { }
});

const calculateRemainingTime = (expirationTime: any) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props: any) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [profile, setProfile] = useState<any | undefined>();

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('profile');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (tokenInfo: TokenInfo) => {
    setToken(tokenInfo.token);
    localStorage.setItem('token', tokenInfo.token);

    const expirationTime = new Date(
      new Date().getTime() + +tokenInfo.expires_in * 1000
    ).toISOString();

    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const setProfileHandler = (profile: any) => {
    setProfile(profile);
    localStorage.setItem('profile', JSON.stringify(profile));
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token as string,
    isLoggedIn: userIsLoggedIn,
    profile: profile as any,
    login: loginHandler,
    logout: logoutHandler,
    setProfile: setProfileHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
