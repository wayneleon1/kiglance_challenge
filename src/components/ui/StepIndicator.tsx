import React from "react";
import { Box } from "@mui/material";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        {[...Array(totalSteps)].map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: "2px",
              bgcolor: index < currentStep ? "#7C3AED" : "#E5E7EB",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default StepIndicator;
