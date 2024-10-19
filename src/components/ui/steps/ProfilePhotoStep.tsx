// ProfilePhotoStep.tsx
import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";

interface ProfilePhotoStepProps {
  formData: { profileColor: string };
  updateFormData: (field: string, value: any) => void;
}

const ProfilePhotoStep: React.FC<ProfilePhotoStepProps> = ({
  formData,
  updateFormData,
}) => {
  const colors = [
    "#000000",
    "#9CA3AF",
    "#7C3AED",
    "#2563EB",
    "#EF4444",
    "#10B981",
    "#F59E0B",
    "#FCD34D",
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
      >
        Choose your profile photo
      </Typography>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button
          variant="outlined"
          component="label"
          sx={{
            border: "1px dashed #E5E7EB",
            borderRadius: 2,
            p: 3,
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            "&:hover": {
              border: "1px dashed #7C3AED",
            },
          }}
        >
          <input type="file" hidden accept="image/*" />
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            + Select an image
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Recommended size: 400×400px
          </Typography>
        </Button>
      </Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          Or select color
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {colors.map((color) => (
            <IconButton
              key={color}
              onClick={() => updateFormData("profileColor", color)}
              sx={{
                width: 40,
                height: 40,
                bgcolor: color,
                border:
                  formData.profileColor === color
                    ? "2px solid #7C3AED"
                    : "none",
                "&:hover": {
                  bgcolor: color,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePhotoStep;
