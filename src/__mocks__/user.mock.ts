import { UserModel } from "~/models/user.model";
import { MOCK_SUBSCRIPTION } from "./common.mock";

export const MOCK_USER: UserModel = {
  id: 1,
  fullname: "Huynh Chi Thuan",
  email: "chithuandev@gmail.com",
  subscription: {
    id: 1,
    package: MOCK_SUBSCRIPTION[0],
    buyDate: new Date(),
  },
  saved: [],
};
