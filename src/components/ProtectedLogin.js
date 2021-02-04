import { Route, Redirect } from "react-router-dom";
import auth from "../helper/auth";
import { getCookie } from "../helper/manageCookies";

export const ProtectedLogin = ({ component: Component, ...rest }) => {
  const cookie = getCookie("token");
  {
    cookie ? auth.isRegistered() : auth.notRegistered();
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/dashboard",
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
