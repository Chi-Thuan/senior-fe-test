import { ACTION_SAMPLE } from "./constants";
import { IAction } from "./interface";

const dispatchSample = (data: any): IAction => {
  return {
    type: ACTION_SAMPLE,
    payload: data,
  };
};

export default {
  dispatchSample,
};
