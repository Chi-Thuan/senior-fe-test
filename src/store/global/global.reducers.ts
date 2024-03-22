import { IStateInit, IAction } from "./global.interface";
import { GLOBAL_SET_USER } from "./global.constants";

const initState: IStateInit = {
  user: null,
};

function SampleReducer(state = initState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case GLOBAL_SET_USER:
      return { user: payload };

    default:
      return state;
  }
}

export default SampleReducer;
