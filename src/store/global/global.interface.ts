import { UserModel } from "~/models/user.model";

export interface IStateInit {
  user: UserModel | null;
}

export interface IAction {
  type: string;
  payload: any;
}
