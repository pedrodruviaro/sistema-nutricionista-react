import { Dashboard } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/Header";

export default function Index() {
    const { user } = useAuth();

    return (
        <Dashboard>
            <Header user={user} />
            <aside>aside</aside>
            <main>to be render</main>
        </Dashboard>
    );
}
