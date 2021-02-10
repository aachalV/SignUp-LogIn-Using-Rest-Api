import { Route, Redirect } from "react-router-dom";
import auth from "../helper/auth";
import { getCookie } from "../helper/manageCookies";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getCookie("token");
  console.log("PCOOKIE", token);

  token ? auth.isRegistered() : auth.notRegistered();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.loaction,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
