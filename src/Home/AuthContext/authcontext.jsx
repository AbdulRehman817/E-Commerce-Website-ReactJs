import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState("");

  // const storetokenInLocalStorage = (accessToken) => {
  //   localStorage.setItem("token", accessToken);
  //   setToken(accessToken);
  // };
  const storetokenInLocalStorage = (accessToken) => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      setToken(accessToken);
    } else {
      localStorage.removeItem("token");
      setToken(null);
    }
  };
  let isLoggedIn = !!token;
  // const LogoutUser = () => {
  //   setToken("");
  //   return localStorage.removeItem("token");
  // };
  const LogoutUser = () => {
    setToken("");
    setUser(""); // Clear user data on logout
    localStorage.removeItem("token");
  };

  //TODO: JWT authentication -to get user details of current Login User

  const userAuthentication = async () => {
    if (!token) {
      console.log("No token found, skipping authentication.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const data = await response.json();
      setUser(data);
      console.log("User data fetched:", data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    } else {
      setUser("");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, LogoutUser, storetokenInLocalStorage, token, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
