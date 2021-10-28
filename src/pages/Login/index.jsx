import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Login } from "./styles";

export default function Index() {
    return (
        <Login>
            <div className="login-form">
                <h2>Login into your account</h2>
                <form>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
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
