import { SET_NOTIFICATION } from "../type";

let initialState = {
    open : true
}

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        all: payload,
        // open: !state.open
        
      };

    default:
      return state;
  }
};