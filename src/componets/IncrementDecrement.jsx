import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementValue, incrementValue } from "../redux/action/action";

const IncrementDecrement = () => {
  // use useselector hook to get data
  const value = useSelector((elm) => elm.value);

  const dispatch = useDispatch();

  return (
    <div>
       <h1>{value}</h1>
      <button onClick={() => dispatch(incrementValue())} className="btn btn-dark me-2">Increment</button>
      <button onClick={() => dispatch(decrementValue())} className="btn btn-dark">Decrement</button>
    </div>
  );
};

export default IncrementDecrement;
