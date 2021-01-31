import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Sigup";
import Dashboard from "../pages/Dashboard";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
