import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Sigup";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}
