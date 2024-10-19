import React, { useState } from "react";
import { Box, Modal, IconButton, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import WelcomeStep from "@/components/ui/steps/WelcomeStep";
import ResponsibilityStep from "@/components/ui/steps/ResponsibilityStep";
import CompanySizeStep from "@/components/ui/steps/CompanySizeStep";
import AudienceStep from "@/components/ui/steps/AudienceStep";
import InterestsStep from "@/components/ui/steps/InterestsStep";
import ProductsStep from "@/components/ui/steps/ProductsStep";
import ProfilePhotoStep from "@/components/ui/steps/ProfilePhotoStep";
import IntroductionStep from "@/components/ui/steps/IntroductionStep";
import CompletionStep from "@/components/ui/steps/CompletionStep";
import StepIndicator from "@/components/ui/StepIndicator";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface MultiStepModalProps {
  open: boolean;
  handleClose: () => void;
}

interface MultiStepModalProps {
  open: boolean;
  handleClose: () => void;
}

const MultiStepModal: React.FC<MultiStepModalProps> = ({
  open,
  handleClose,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    responsibility: "",
    companySize: "",
    audience: "",
    interests: [] as string[],
    products: [] as string[],
    profileColor: "#7C3AED",
    bio: "",
    title: "",
    location: "",
  });

  const totalSteps = 8;

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);
  const handleSkip = () => setActiveStep((prevStep) => prevStep + 1);

  const updateFormData = (field: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted", formData);
    setActiveStep(totalSteps);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <WelcomeStep onNext={handleNext} />;
      case 1:
        return (
          <ResponsibilityStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <CompanySizeStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <AudienceStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <InterestsStep formData={formData} updateFormData={updateFormData} />
        );
      case 5:
        return (
          <ProductsStep formData={formData} updateFormData={updateFormData} />
        );
      case 6:
        return (
          <ProfilePhotoStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 7:
        return (
          <IntroductionStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 8:
        return <CompletionStep />;
      default:
        return null;
    }
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
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TrendingUpIcon sx={{ color: "primary.main" }} />
            <IconButton onClick={handleClose} sx={{ color: "text.secondary" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {activeStep > 0 && activeStep < totalSteps && (
            <StepIndicator totalSteps={totalSteps} currentStep={activeStep} />
          )}

          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            {getStepContent(activeStep)}
          </Box>

          {activeStep > 0 && activeStep < totalSteps && (
            <NavigationButtons
              activeStep={activeStep}
              totalSteps={totalSteps}
              handleBack={handleBack}
              handleSkip={handleSkip}
              handleNext={handleNext}
              handleSubmit={handleSubmit}
            />
          )}
        </Box>
      </Container>
    </Modal>
  );
};

export default MultiStepModal;
