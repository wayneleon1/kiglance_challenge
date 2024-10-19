import React from "react";
import { Box, Button } from "@mui/material";

interface NavigationButtonsProps {
  activeStep: number;
  totalSteps: number;
  handleBack: () => void;
  handleSkip: () => void;
  handleNext: () => void;
  handleSubmit: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  activeStep,
  totalSteps,
  handleBack,
  handleSkip,
  handleNext,
  handleSubmit,
}) => {
  const isLastStep = activeStep === totalSteps - 1;

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <Button
        onClick={handleBack}
        sx={{
          color: "#7C3AED",
          textTransform: "none",
          minWidth: "auto",
        }}
      >
        Back
      </Button>
      <Box sx={{ display: "flex", gap: 2 }}>
        {!isLastStep && (
          <Button
            onClick={handleSkip}
            sx={{
              color: "#7C3AED",
              textTransform: "none",
              minWidth: "auto",
            }}
          >
            Skip
          </Button>
        )}
        <Button
          variant="contained"
          onClick={isLastStep ? handleSubmit : handleNext}
          sx={{
            bgcolor: "#7C3AED",
            "&:hover": { bgcolor: "#6D28D9" },
            textTransform: "none",
            px: 4,
            borderRadius: "8px",
          }}
        >
          {isLastStep ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default NavigationButtons;
