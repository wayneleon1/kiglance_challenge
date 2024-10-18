"use client";
import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import MultiStepModal from "./MultiStepModal";

const MainButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
        onClick={() => setOpen(true)}
      >
        Let’s get started!
      </Button>
      <MultiStepModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default MainButton;
