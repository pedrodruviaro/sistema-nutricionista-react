import moment from "moment";
import { Dashboard, Sidebar } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

export default function Index() {
    const { user, logout } = useAuth();

    // states
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function toggleOpenSidebar() {
        setSidebarOpen((prev) => !prev);
    }

    return (
        <Dashboard>
            <Header user={user} />
            <Sidebar active={sidebarOpen}>
                <p>{moment().format("Do-MMM")}</p>
                <div>
                    <nav>
                        <a href="/">Dashboard</a>
                    </nav>
                    <Button onClick={logout}>Button</Button>
                </div>
            </Sidebar>

            <main>
                <button
                    className="toggle"
                    onClick={toggleOpenSidebar}
                    teste={sidebarOpen}
                >
                    <MdMenu />
                </button>
            </main>
        </Dashboard>
    );
}
