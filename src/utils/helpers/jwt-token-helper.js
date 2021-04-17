import pkg from "jsonwebtoken";
const { sign } = pkg;
import { jwtSecretKey, refreshTokenSecretKey } from "../../config/index.js";

export function signAccessToken(userId) {
  const accessToken = sign({ _id: userId }, jwtSecretKey);
  return accessToken;
}
export function signRefreshToken(userId) {
  const refreshToken = sign({ _id: userId }, refreshTokenSecretKey);
  return refreshToken;
}
