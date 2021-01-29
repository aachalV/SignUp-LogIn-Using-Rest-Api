const crypto = require("crypto");
const CIPHER_ALGO_NAME = "aes-256-cbc";
const ENC_KEY = "8BKtlyw6lRdHwOUnVUgx6YBZOWQhCLjx84hHhf6w0QM=";
const CIPHER_INPUT_ENCODING = "utf8";
const CIPHER_OUTPUT_ENCODING = "base64";

export const encryptPassword = function (password) {
  const cipher = crypto.createCipher(CIPHER_ALGO_NAME, ENC_KEY);
  var encrypted = cipher.update(
    password,
    CIPHER_INPUT_ENCODING,
    CIPHER_OUTPUT_ENCODING
  );
  encrypted += cipher.final(CIPHER_OUTPUT_ENCODING);
  return encrypted;
};
