import React from "react";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Kiglance</h1>
      <Counter />
    </div>
  );
};

export default Home;
