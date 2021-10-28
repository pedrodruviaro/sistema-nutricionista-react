import { createContext, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

export default function AuthContextProvider({ children }) {
    const location = useLocation();
    const history = useHistory();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [authorized, setAuthorized] = useState(false);

    // PERSISTING USER
    useEffect(() => {
        const userObj = JSON.parse(sessionStorage.getItem("user"));
        if (!userObj) history.push("/");

        if (typeof userObj !== Object) history.push("/");

        setUser(userObj);
        setAuthorized(true);
        api.defaults.headers.authorization = `Bearer ${userObj.token}`;
        history.push(location.pathname);
    }, [history, location.pathname]);

    // LOGIN
    async function login(credentials) {
        setLoading(true);
        try {
            const { data } = await api.post("/api/auth/login", credentials);
            if (!data) return;

            setUser(data);
            setAuthorized(true);
            sessionStorage.setItem("user", JSON.stringify(data));
            api.defaults.headers.authorization = `Bearer ${data.token}`;
            setLoading(false);
            history.push("/dashboard");
        } catch (err) {
            setAuthorized(false);
            console.error(err.response.data);
        }
    }

    // LOGOUT
    async function logout() {
        setUser({});
        setAuthorized(false);
        sessionStorage.removeItem("user");
        api.defaults.headers.authorization = undefined;
        history.push("/");
    }

    return (
        <AuthContext.Provider
            value={{ login, logout, authorized, loading, user }}
        >
            {children}
        </AuthContext.Provider>
    );
}
