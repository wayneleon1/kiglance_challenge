// InterestsStep.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface InterestsStepProps {
  formData: { interests: string[] };
  updateFormData: (field: string, value: any) => void;
}

const InterestsStep: React.FC<InterestsStepProps> = ({
  formData,
  updateFormData,
}) => {
  const interests = [
    "SEO",
    "Sales enablement",
    "Email Marketing",
    "Cross-Channel",
    "Demand Generation",
    "Max ch",
    "Label",
    "Demand",
    "Max using 10 Tags",
  ];

  const toggleInterest = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    updateFormData("interests", newInterests);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
      >
        What are your product interests?
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 3, color: "text.secondary", textAlign: "center" }}
      >
        Choose three or more.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          mb: 3,
          justifyContent: "center",
        }}
      >
        {interests.map((interest) => (
          <Button
            key={interest}
            onClick={() => toggleInterest(interest)}
            sx={{
              borderRadius: "30px",
              border: "1px solid #D1D5DB",
              bgcolor: formData.interests.includes(interest)
                ? "#E0E7FF"
                : "#F9FAFB",
              color: formData.interests.includes(interest)
                ? "#4F46E5"
                : "text.primary",
              px: 3,
              py: 1.5,
              fontSize: "0.875rem",
              textTransform: "none",
              "&:hover": {
                bgcolor: formData.interests.includes(interest)
                  ? "#E0E7FF"
                  : "#F3F4F6",
              },
            }}
          >
            {interest}
          </Button>
        ))}
      </Box>
      <Button
        sx={{
          color: "#7C3AED",
          textTransform: "none",
          display: "block",
          margin: "0 auto",
        }}
      >
        Show more
      </Button>
    </Box>
  );
};

export default InterestsStep;
