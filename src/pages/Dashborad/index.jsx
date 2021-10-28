import moment from "moment";
import { Dashboard, Sidebar } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import Header from "../../components/Header";

export default function Index() {
    const { user, logout } = useAuth();

    return (
        <Dashboard>
            <Header user={user} />
            <Sidebar>
                <p>{moment().format("Do-MMM")}</p>
                <div>
                    <nav>
                        <a href="/">Dashboard</a>
                    </nav>
                    <Button onClick={logout}>Button</Button>
                </div>
            </Sidebar>
            <main>to be render</main>
        </Dashboard>
    );
}
