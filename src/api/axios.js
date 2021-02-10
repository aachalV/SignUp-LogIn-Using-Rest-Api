import axios from "axios";
import config from "../configuration/Configuration";

const instance = axios.create({
  baseURL: config.BASE_URL,
});

export const api = async ({ url, body = {}, headers = {}, method = "GET" }) => {
  switch (method) {
    case "POST":
      try {
        const result = await instance.post(url, body);
        //console.log("AXIOS", result);
        if (result) {
          if (result.status === 200) {
            return result;
          }
        }
      } catch (err) {
        alert(err.message);
        return "err";
      }

      break;

    case "GET":
      try {
        const result = await instance.get(url, { headers });
        if (result) {
          if (result.status === 200) {
            return result;
          }
        }
      } catch (err) {
        console.log(err);
        return err;
      }
      break;
    default:
      break;
  }
};
