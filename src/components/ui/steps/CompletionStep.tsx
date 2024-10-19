/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CompletionStep: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Avatar
        sx={{
          bgcolor: "#7C3AED",
          width: 64,
          height: 64,
          margin: "0 auto",
          mb: 3,
        }}
      >
        <CheckIcon />
      </Avatar>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        You're all set!
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Start stackin', reviewin', discussin' and more... 🙌
      </Typography>
    </Box>
  );
};

export default CompletionStep;
