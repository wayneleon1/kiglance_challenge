import React from "react";
import { Box, Typography, TextField, Avatar } from "@mui/material";

interface IntroductionStepProps {
  formData: { bio: string; title: string; location: string };
  updateFormData: (field: string, value: any) => void;
}

const IntroductionStep: React.FC<IntroductionStepProps> = ({
  formData,
  updateFormData,
}) => {
  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      updateFormData(field, event.target.value);
    };

  const bioLimit = 90;
  const titleLimit = 40;

  return (
    <Box sx={{ p: 3, margin: "0 auto" }}>
      <Typography
        variant="h6"
        sx={{ mb: 1, textAlign: "center", fontWeight: 600 }}
      >
        Introduce yourself to the community
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 2, textAlign: "center", color: "text.secondary" }}
      >
        Let members learn more about you.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Avatar
          src="/path-to-jane-doe-image.jpg"
          sx={{ width: 56, height: 56, mr: 1.5 }}
        />
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Jane Doe
        </Typography>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Marketing and Sales Tech lover"
        value={formData.bio}
        onChange={handleInputChange("bio")}
        error={formData.bio.length > bioLimit}
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", ml: 1 }}
            >
              {formData.bio.length}/{bioLimit}
            </Typography>
          ),
        }}
      />

      <TextField
        fullWidth
        variant="outlined"
        placeholder="CEO"
        value={formData.title}
        onChange={handleInputChange("title")}
        error={formData.title.length > titleLimit}
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", ml: 1 }}
            >
              {formData.title.length}/{titleLimit}
            </Typography>
          ),
        }}
      />

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Location"
        value={formData.location}
        onChange={handleInputChange("location")}
      />
    </Box>
  );
};

export default IntroductionStep;
