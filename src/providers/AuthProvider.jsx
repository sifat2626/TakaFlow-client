/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosSecure.get("/profile");
        setUser(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const register = async (registerData) => {
    setLoading(true);
    const { data } = await axiosSecure.post("/register", registerData);
    setUser(data.user);
    setLoading(false);
  };

  const login = async (loginData) => {
    setLoading(true);
    const { data } = await axiosSecure.post("/login", loginData);
    setUser(data.user);
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await axiosSecure.post("/logout");
    setUser(null);
    setLoading(false);
  };

  const authInfo = { user, register, login, logout, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
