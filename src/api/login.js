const axios = require("axios");

const BASE_URL = "https://us-central1-ecomm-fed59.cloudfunctions.net/app";

export const login = ({ email, password }) => {
  try {
    return axios.post(BASE_URL + "/user/login", {
      email,
      password,
    });
    //console.log("DATA =>", data);
  } catch (err) {
    console.log(err);
  }
};
