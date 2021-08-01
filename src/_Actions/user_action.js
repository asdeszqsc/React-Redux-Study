import { GET_USER } from "./types";
import { request } from "src/Utility/axios";

export function GetUser() {
  const res = request("GET", "/api/users");
  return {
    type: GET_USER,
    payload: res,
  };
}