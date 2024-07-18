/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const register = (registerData) => {
    setLoading(true);
    setUser(() => registerData);
    console.log(user);
    setLoading(false);
  };

  const authInfo = { user, register, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
