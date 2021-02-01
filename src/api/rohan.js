import axios from "axios";
import { POST, PUT, DELETE, GET } from "../utils/httpMethods";
import { openSnackbar } from "../components/generic/Notifier";
import Store from "../redux/store";
import * as actionTypes from "../redux/actions";
function BackdropLoader(value) {
  return {
    type: actionTypes.LOADER,
    value: value,
  };
}
function clearToken() {
  return { type: actionTypes.ADMIN_TOKEN, token: "" };
}
function clearUserToken() {
  return { type: actionTypes.USER_TOKEN, token: "" };
}
function clearUserDetails() {
  return { type: actionTypes.USER_DETAILS, user: {} };
}
const instance = axios.create({
  baseURL: "https://us-central1-ecomm-fed59.cloudfunctions.net/app",
  // baseURL: 'http://localhost:5001',
});
// Response Interceptors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 403) {
        Store.dispatch(clearToken());
        Store.dispatch(clearUserToken());
        Store.dispatch(clearUserDetails());
      }
    }
    return Promise.reject(error);
  }
);
const hitApi = ({
  url,
  params = {},
  headers = {},
  body = {},
  method = GET,
}) => {
  Store.dispatch(BackdropLoader(true));
  if (method === POST) {
    return new Promise(function (resolve, reject) {
      instance
        .post(url, body, { params: { ...params }, headers: { ...headers } })
        .then((result) => {
          Store.dispatch(BackdropLoader(false));
          if (result.status === 200) {
            if (result.data.success) {
              resolve(result);
              if (result.data.msg) {
                openSnackbar({ message: result.data.msg, variant: "success" });
              }
            } else {
              openSnackbar({ message: result.data.msg, variant: "error" });
            }
          } else {
            openSnackbar({ message: result.data.msg, variant: "error" });
          }
        })
        .catch((exception) => {
          Store.dispatch(BackdropLoader(false));
          if (exception.response) {
            if (exception.response.status === 403) {
              openSnackbar({
                message: exception.response.data.msg
                  ? exception.response.data.msg
                  : "Please Login Again!",
                variant: "error",
              });
            }
          } else {
            openSnackbar({ message: exception.message, variant: "error" });
          }
        });
    });
  } else if (method === PUT) {
    return new Promise(function (resolve, reject) {
      instance
        .put(url, body, { params: { ...params }, headers: { ...headers } })
        .then((result) => {
          Store.dispatch(BackdropLoader(false));
          if (result.status === 200) {
            if (result.data.success) {
              resolve(result);
              if (result.data.msg) {
                openSnackbar({ message: result.data.msg, variant: "success" });
              }
            } else {
              openSnackbar({ message: result.data.msg, variant: "error" });
            }
          } else {
            openSnackbar({ message: result.data.msg, variant: "error" });
          }
        })
        .catch((exception) => {
          Store.dispatch(BackdropLoader(false));
          if (exception.response) {
            if (exception.response.status === 403) {
              openSnackbar({
                message: exception.response.data.msg,
                variant: "error",
              });
            }
          } else {
            openSnackbar({ message: exception.message, variant: "error" });
          }
        });
    });
  } else if (method === DELETE) {
    return new Promise(function (resolve, reject) {
      instance
        .delete(url, { params: { ...params }, headers: { ...headers } })
        .then((result) => {
          Store.dispatch(BackdropLoader(false));
          if (result.status === 200) {
            if (result.data.success) {
              resolve(result);
              if (result.data.msg) {
                openSnackbar({ message: result.data.msg, variant: "success" });
              }
            } else {
              openSnackbar({ message: result.data.msg, variant: "error" });
            }
          } else {
            openSnackbar({ message: result.data.msg, variant: "error" });
          }
        })
        .catch((exception) => {
          Store.dispatch(BackdropLoader(false));
          if (exception.response) {
            if (exception.response.status === 403) {
              openSnackbar({
                message: exception.response.data.msg,
                variant: "error",
              });
            }
          } else {
            openSnackbar({ message: exception.message, variant: "error" });
          }
        });
    });
  } else {
    return new Promise(function (resolve, reject) {
      instance
        .get(url, { params: { ...params }, headers: { ...headers } })
        .then((result) => {
          Store.dispatch(BackdropLoader(false));
          if (result.status === 200) {
            if (result.data.success) {
              resolve(result);
              if (result.data.msg) {
                openSnackbar({ message: result.data.msg, variant: "success" });
              }
            } else {
              openSnackbar({ message: result.data.msg, variant: "error" });
            }
          } else {
            openSnackbar({ message: result.data.msg, variant: "error" });
          }
        })
        .catch((exception) => {
          Store.dispatch(BackdropLoader(false));
          if (exception.response) {
            if (exception.response.status === 403) {
              openSnackbar({
                message: exception.response.data.msg,
                variant: "error",
              });
            }
          } else {
            openSnackbar({ message: exception.message, variant: "error" });
          }
        });
    });
  }
};
export { hitApi };
export default instance;
