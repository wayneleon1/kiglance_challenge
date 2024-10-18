/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Grid,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";

interface MultiStepModalProps {
  open: boolean;
  handleClose: () => void;
}

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

const MultiStepModal: React.FC<MultiStepModalProps> = ({
  open,
  handleClose,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedResponsibility, setSelectedResponsibility] =
    useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("#7C3AED");
  const [selectedAudience, setSelectedAudience] = useState<string>("");
  const [selectedCompanySize, setSelectedCompanySize] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const [bio, setBio] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const totalSteps = 7;
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleResponsibilitySelect = (responsibility: string) => {
    setSelectedResponsibility(responsibility);
    handleNext();
  };

  const handleSubmit = () => {
    console.log("Form submitted", {
      responsibility: selectedResponsibility,
      companySize: selectedCompanySize,
      audience: selectedAudience,
      interests: selectedInterests,
      color: selectedColor,
    });
    setActiveStep(8);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ textAlign: "center", p: 3 }}>
            <Avatar
              sx={{
                bgcolor: "#7C3AED",
                width: 64,
                height: 64,
                margin: "0 auto",
                mb: 2,
                fontSize: "2rem",
              }}
            >
              J
            </Avatar>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Welcome Jane Doe 🙌
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              We need a few details to personalize your experience.
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                bgcolor: "#7C3AED",
                "&:hover": { bgcolor: "#6D28D9" },
                borderRadius: "8px",
                py: 1.5,
                px: 4,
                textTransform: "none",
                width: "200px",
              }}
            >
              Let's do it
            </Button>
            <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
              This will only take a minute.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ m: 2, fontWeight: "bold", textAlign: "center" }}
            >
              What is your main work responsibility?
            </Typography>
            <Grid container spacing={2}>
              {[
                ["Marketing", "IT"],
                ["Customer Services", "Finance"],
                ["Sales", "Owner/CEO"],
                ["Design", "Education/Student"],
                ["Product"],
              ].map((row, rowIndex) => (
                <Grid item xs={12} key={rowIndex}>
                  <Grid container spacing={2}>
                    {row.map((responsibility) => (
                      <Grid
                        item
                        xs={row.length === 1 ? 12 : 6}
                        key={responsibility}
                      >
                        <Button
                          fullWidth
                          onClick={() =>
                            handleResponsibilitySelect(responsibility)
                          }
                          sx={{
                            color: "text.primary",
                            border: "1px solid #E5E7EB",
                            borderRadius: "12px",
                            p: 2,
                            justifyContent: "center",
                            textAlign: "center",
                            bgcolor:
                              selectedResponsibility === responsibility
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
                          {responsibility}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>
              What is your company size?
            </Typography>
            <Grid container spacing={2}>
              {[
                "Myself only",
                "2-10 employees",
                "11-50 employees",
                "51-200 employees",
                "201-500 employees",
                "501-1000 employees",
                "1001-5000 employees",
                "5001-10,000 employees",
                "10,000+ employees",
              ].map((size, index) => (
                <Grid item xs={index < 8 ? 6 : 12} key={size}>
                  <Button
                    fullWidth
                    onClick={() => {
                      setSelectedCompanySize(size);
                      handleNext();
                    }}
                    sx={{
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      p: 2,
                      color: "text.primary",
                      bgcolor:
                        selectedCompanySize === size
                          ? "#F3F4F6"
                          : "transparent",
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
      case 3:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>
              Who is your target audience?
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Business (B2B)",
                "Consumers (B2C)",
                "Business and Consumers",
              ].map((audience) => (
                <Button
                  key={audience}
                  onClick={() => {
                    setSelectedAudience(audience);
                    handleNext();
                  }}
                  sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    p: 1,
                    color: "text.primary",
                    bgcolor:
                      selectedAudience === audience ? "#F3F4F6" : "transparent",
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

      case 4:
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
              {[
                "SEO",
                "Sales enablement",
                "Email Marketing",
                "Cross-Channel",
                "Demand Generation",
                "Max ch",
                "Label",
                "Demand",
                "Max using 10 Tags",
              ].map((interest) => (
                <Button
                  key={interest}
                  onClick={() =>
                    setSelectedInterests((prev) =>
                      prev.includes(interest)
                        ? prev.filter((i) => i !== interest)
                        : [...prev, interest]
                    )
                  }
                  sx={{
                    borderRadius: "30px",
                    border: "1px solid #D1D5DB",
                    bgcolor: selectedInterests.includes(interest)
                      ? "#E0E7FF"
                      : "#F9FAFB",
                    color: selectedInterests.includes(interest)
                      ? "#4F46E5"
                      : "text.primary",
                    px: 3,
                    py: 1.5,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: selectedInterests.includes(interest)
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
      case 5:
        return (
          <Box sx={{ px: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, textAlign: "center" }}>
              Select 3+ products that you use
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 1, textAlign: "center", color: "text.secondary" }}
            >
              Build your tech stack from the get go.
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search products"
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                ),
              }}
              sx={{ mb: 1 }}
            />
            <Typography variant="h6" sx={{ mb: 1 }}>
              Products
            </Typography>
            <Box sx={{ height: "300", overflow: "auto" }}>
              {[
                "Google Analytics",
                "Facebook Analytics",
                "Twitter Analytics",
                "Pinterest Analytics",
              ].map((product, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={`https://via.placeholder.com/40?text=${index + 1}`}
                      sx={{ mr: 2 }}
                    />
                    <Typography>{product}</Typography>
                  </Box>
                  <IconButton
                    onClick={() =>
                      setSelectedProducts((prev) =>
                        prev.includes(product)
                          ? prev.filter((p) => p !== product)
                          : [...prev, product]
                      )
                    }
                  >
                    {selectedProducts.includes(product) ? (
                      <CheckIcon sx={{ color: "primary.main" }} />
                    ) : (
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          border: "2px solid",
                          borderColor: "text.secondary",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
        );
      case 6:
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
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                Or select color
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {[
                  "#000000",
                  "#9CA3AF",
                  "#7C3AED",
                  "#2563EB",
                  "#EF4444",
                  "#10B981",
                  "#F59E0B",
                  "#FCD34D",
                ].map((color) => (
                  <IconButton
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: color,
                      border:
                        selectedColor === color ? "2px solid #7C3AED" : "none",
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
      case 7:
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
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {bio.length}/90
                  </Typography>
                ),
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="CEO"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {title.length}/40
                  </Typography>
                ),
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Box>
        );

      case 8:
        return (
          <Box sx={{ textAlign: "center", p: 3 }}>
            <Avatar
              sx={{
                bgcolor: "#7C3AED",
                width: 64,
                height: 64,
                margin: "0 auto",
                mb: 3,
              }}
            >
              <CheckIcon />
            </Avatar>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              You're all set!
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Start stackin', reviewin', discussin' and more... 🙌
            </Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  const renderNavigation = () => {
    if (activeStep === 0 || activeStep === 8) return null;

    const isLastStep = activeStep === totalSteps;

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="onboarding-modal"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: 24,
            position: "relative",
            width: "100%",
            overflow: "hidden",
            maxHeight: "480px",
            height: "480px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <div className="flex justify-between items-center mx-4">
              <TrendingUpIcon className="text-main" />
              <IconButton
                onClick={handleClose}
                sx={{
                  color: "text.secondary",
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            {activeStep !== 0 && activeStep !== 8 && (
              <StepIndicator totalSteps={totalSteps} currentStep={activeStep} />
            )}
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col justify-center">
            {getStepContent(activeStep)}
          </div>
          <div>{renderNavigation()}</div>
        </Box>
      </Container>
    </Modal>
  );
};

export default MultiStepModal;
