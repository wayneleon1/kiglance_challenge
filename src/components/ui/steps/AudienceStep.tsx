import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface AudienceStepProps {
  formData: { audience: string };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

const AudienceStep: React.FC<AudienceStepProps> = ({
  formData,
  updateFormData,
  onNext,
}) => {
  const audiences = [
    "Business (B2B)",
    "Consumers (B2C)",
    "Business and Consumers",
  ];

  const handleAudienceSelect = (audience: string) => {
    updateFormData("audience", audience);
    onNext();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>
        Who is your target audience?
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {audiences.map((audience) => (
          <Button
            key={audience}
            onClick={() => handleAudienceSelect(audience)}
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              p: 1,
              color: "text.primary",
              bgcolor:
                formData.audience === audience ? "#F3F4F6" : "transparent",
              "&:hover": {
                bgcolor: "#F3F4F6",
                border: "1px solid #D1D5DB",
              },
              textTransform: "none",
            }}
          >
            {audience}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default AudienceStep;
