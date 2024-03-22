import { UserModel } from "~/models/user.model";
import { GLOBAL_SET_USER } from "./global.constants";

export const updateUser = (data: UserModel) => {
  return {
    type: GLOBAL_SET_USER,
    payload: data,
  };
};
