import React from "react";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Button
        variant="contained"
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Let’s get started!
      </Button>
    </div>
  );
};

export default Home;
