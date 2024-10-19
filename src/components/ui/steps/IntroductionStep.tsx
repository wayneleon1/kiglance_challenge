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

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Introduce yourself to the community
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
      >
        Let members learn more about you.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          src="/path-to-jane-doe-image.jpg"
          sx={{ width: 60, height: 60, mr: 2 }}
        />
        <Typography variant="h6">Jane Doe</Typography>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Marketing and Sales Tech lover"
        value={formData.bio}
        onChange={handleInputChange("bio")}
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {formData.bio.length}/90
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
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {formData.title.length}/40
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
