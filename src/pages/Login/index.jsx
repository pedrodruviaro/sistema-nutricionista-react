import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Login } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function Index() {
    const { login } = useAuth();

    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // handling login
    function handleLogin(e) {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        login(credentials);
    }

    return (
        <Login>
            <div className="login-form">
                <h2>Login into your account</h2>
                <form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button primary type="submit">
                        Enter
                    </Button>
                </form>
                <p>or</p>
                <Button>Create Account</Button>
            </div>
        </Login>
    );
}
