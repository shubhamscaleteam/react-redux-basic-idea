const { INCREMENT, DECREMENT } = require("../actiontype/actiontype");

export const incrementValue = () => {
  return {
    type: INCREMENT,
    info: "performing action of increment",
  };
};

export const decrementValue = () => {
  return {
    type: DECREMENT,
    info: "performing action of decrement",
  };
};
