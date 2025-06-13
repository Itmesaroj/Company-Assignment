import { createContext, useState } from "react";

// Create context
export const authContext = createContext();

export function AuthProvider({ children }) {
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")) || false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    function registerUser(data) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setLogin(true);
        localStorage.setItem("login", true);
    }

    function loginUser() {
        setLogin(true);
        localStorage.setItem("login", true);
    }

    function logoutUser() {
        setLogin(false);
        setUser(null);
        localStorage.removeItem("login");
        localStorage.removeItem("user");
    }

    return (
        <authContext.Provider value={{ login, user, registerUser, setLogin, setUser, loginUser, logoutUser }}>
            {children}
        </authContext.Provider>
    );
}
