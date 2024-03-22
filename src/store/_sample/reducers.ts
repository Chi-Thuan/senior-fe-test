import { IStateInit, IAction } from "./interface";
import { ACTION_SAMPLE } from "./constants";

const initState: IStateInit = {
  data: [],
};

function SampleReducer(state = initState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_SAMPLE:
      return { data: payload };

    default:
      return state;
  }
}

export default SampleReducer;
