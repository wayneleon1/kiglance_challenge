"use client";
import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="space-x-2">
        <Button
          className="px-4 py-2 bg-main text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
