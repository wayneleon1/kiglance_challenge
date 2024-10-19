import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useProductTags } from "@/hooks/useProductTags";

interface InterestsStepProps {
  formData: { interests: string[] };
  updateFormData: (field: string, value: any) => void;
}

const InterestsStep: React.FC<InterestsStepProps> = ({
  formData,
  updateFormData,
}) => {
  const { tags, loading, error } = useProductTags();

  const toggleInterest = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    updateFormData("interests", newInterests);
  };

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body2" sx={{ mt: 2 }}>
          Loading product tags...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "error.main" }}>
          Error fetching product tags: {error}
        </Typography>
      </Box>
    );
  }

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
        {tags.map((interest) => (
          <Button
            key={interest.id}
            onClick={() => toggleInterest(interest.name)}
            sx={{
              borderRadius: "30px",
              border: "1px solid #D1D5DB",
              bgcolor: formData.interests.includes(interest.name)
                ? "#E0E7FF"
                : "#F9FAFB",
              color: formData.interests.includes(interest.name)
                ? "#4F46E5"
                : "text.primary",
              px: 2,
              py: 1,
              fontSize: "0.875rem",
              textTransform: "none",
              "&:hover": {
                bgcolor: formData.interests.includes(interest.name)
                  ? "#E0E7FF"
                  : "#F3F4F6",
              },
            }}
          >
            {interest.name}
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
