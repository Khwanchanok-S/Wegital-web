import { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import * as authApi from '../apis/auth-api';
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null,
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);
  const login = async (userName, password) => {
    const res = await authApi.login({ userName, password });

    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };
  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, setAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
