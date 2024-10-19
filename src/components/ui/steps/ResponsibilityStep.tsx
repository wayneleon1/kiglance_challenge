import React from "react";
import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import { useResponsibilities } from "@/hooks/useResponsibilities";
import { Responsibility } from "@/types/responsibilitytypes";

interface ResponsibilityStepProps {
  formData: { responsibility: string };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

const ResponsibilityStep: React.FC<ResponsibilityStepProps> = ({
  formData,
  updateFormData,
  onNext,
}) => {
  const { responsibilities, loading, error } = useResponsibilities();

  const handleResponsibilitySelect = (responsibility: string) => {
    updateFormData("responsibility", responsibility);
    onNext();
  };

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body2" sx={{ mt: 2 }}>
          Loading responsibilities...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "error.main" }}>
          Error fetching responsibilities: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h6"
        sx={{ m: 2, fontWeight: "bold", textAlign: "center" }}
      >
        What is your main work responsibility?
      </Typography>
      <Grid container spacing={2}>
        {responsibilities.map(
          (responsibility: Responsibility, index: number) => (
            <Grid item xs={6} key={index}>
              <Button
                fullWidth
                onClick={() => handleResponsibilitySelect(responsibility.id)}
                sx={{
                  color: "text.primary",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  p: 2,
                  justifyContent: "center",
                  textAlign: "center",
                  bgcolor:
                    formData.responsibility === responsibility.id
                      ? "#F3F4F6"
                      : "transparent",
                  "&:hover": {
                    bgcolor: "#F3F4F6",
                    border: "1px solid #D1D5DB",
                  },
                  textTransform: "none",
                  height: "40px",
                }}
              >
                {responsibility.name}
              </Button>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default ResponsibilityStep;
