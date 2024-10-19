import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Avatar
        sx={{
          bgcolor: "#7C3AED",
          width: 64,
          height: 64,
          margin: "0 auto",
          mb: 2,
          fontSize: "2rem",
        }}
      >
        J
      </Avatar>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Welcome Jane Doe 🙌
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        We need a few details to personalize your experience.
      </Typography>
      <Button
        variant="contained"
        onClick={onNext}
        sx={{
          bgcolor: "#7C3AED",
          "&:hover": { bgcolor: "#6D28D9" },
          borderRadius: "8px",
          py: 1.5,
          px: 4,
          textTransform: "none",
          width: "200px",
        }}
      >
        Let&apos;s do it
      </Button>
      <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
        This will only take a minute.
      </Typography>
    </Box>
  );
};

export default WelcomeStep;
