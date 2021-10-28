import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashborad";
import Login from "./pages/Login";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
