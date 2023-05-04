const { INCREMENT, DECREMENT } = require("../actiontype/actiontype");

const initialstate = {
  value: 0,
};

export const reducerfuncation = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
