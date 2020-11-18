import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseNumber, decreaseNumber } from "./Redux/action/numberAction";

const Counter = () => {
  const number = useSelector((state) => {
    return state.numberReducer;
  });
  const dispatch = useDispatch();

  console.log(number);
  return (
    <div>
      <h1>숫자 변경하는곳</h1>
      <h2>{number.number}</h2>
      <button onClick={() => dispatch(increaseNumber())}>증가하기</button>
      <button onClick={() => dispatch(decreaseNumber())}>감소하기</button>
      <br />
    </div>
  );
};
export default Counter;
