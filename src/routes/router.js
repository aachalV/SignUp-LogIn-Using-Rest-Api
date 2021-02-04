import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { ProtectedLogin } from "../components/ProtectedLogin";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Sigup";
import Dashboard from "../pages/Dashboard";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <ProtectedLogin exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={() => "404 Page Not Found"} />
      </Switch>
    </BrowserRouter>
  );
}
