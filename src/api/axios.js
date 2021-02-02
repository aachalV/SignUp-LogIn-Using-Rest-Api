import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecomm-fed59.cloudfunctions.net/app",
});

export const api = async ({ url, body = {}, method = "GET" }) => {
  switch (method) {
    case "POST":
      const result = await instance.post(url, body);
      if (result) {
        return result;
      }

      break;

    default:
      break;
  }
};
