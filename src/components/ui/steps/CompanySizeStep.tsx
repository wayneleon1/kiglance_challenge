import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

interface CompanySizeStepProps {
  formData: { companySize: string };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

const CompanySizeStep: React.FC<CompanySizeStepProps> = ({
  formData,
  updateFormData,
  onNext,
}) => {
  const companySizes = [
    "Myself only",
    "2-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1001-5000 employees",
    "5001-10,000 employees",
    "10,000+ employees",
  ];

  const handleSizeSelect = (size: string) => {
    updateFormData("companySize", size);
    onNext();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>
        What is your company size?
      </Typography>
      <Grid container spacing={2}>
        {companySizes.map((size, index) => (
          <Grid item xs={index < 8 ? 6 : 12} key={size}>
            <Button
              fullWidth
              onClick={() => handleSizeSelect(size)}
              sx={{
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                p: 2,
                color: "text.primary",
                bgcolor:
                  formData.companySize === size ? "#F3F4F6" : "transparent",
                "&:hover": {
                  bgcolor: "#F3F4F6",
                  border: "1px solid #D1D5DB",
                },
                textTransform: "none",
                height: "30px",
              }}
            >
              {size}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanySizeStep;
