import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface FormData {
  profileColor: string;
  profilePhoto?: File;
}

interface ProfilePhotoStepProps {
  formData: FormData;
  updateFormData: (field: string, value: any) => void;
}

const colors = [
  { hex: "#000000", label: "Black" },
  { hex: "#9CA3AF", label: "Gray" },
  { hex: "#7C3AED", label: "Purple" },
  { hex: "#2563EB", label: "Blue" },
  { hex: "#EF4444", label: "Red" },
  { hex: "#10B981", label: "Green" },
  { hex: "#F59E0B", label: "Orange" },
  { hex: "#FCD34D", label: "Yellow" },
];

const SelectImageButton = styled(Button)({
  padding: "10px 20px",
  borderRadius: "50px",
  border: "1px solid #E5E7EB",
  boxShadow: "none",
  textTransform: "none",
  backgroundColor: "#fff",
  color: "#111827",
  "&:hover": {
    backgroundColor: "#F9FAFB",
    boxShadow: "none",
  },
});

const ColorButton = styled(IconButton)({
  width: 32,
  height: 32,
  padding: 0,
  margin: "4px",
  border: "none",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const AvatarPreview = styled(Box)({
  width: 120,
  height: 120,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3.5rem",
  fontWeight: 500,
  color: "white",
  marginBottom: "32px",
});

const ProfilePhotoStep: React.FC<ProfilePhotoStepProps> = ({
  formData,
  updateFormData,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [tempImage, setTempImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setTempImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setOpenDialog(true);
    }
  };

  const handleColorSelect = (color: string) => {
    updateFormData("profileColor", color);
  };

  const handleSave = () => {
    if (tempImage) {
      updateFormData("profilePhoto", tempImage);
    }
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setTempImage(null);
    setPreviewUrl(null);
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: 500,
          color: "#111827",
        }}
      >
        Choose your profile photo
      </Typography>

      <Box component="label" sx={{ mb: 4, textAlign: "center" }}>
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
        <SelectImageButton variant="outlined" startIcon={<AddIcon />}>
          Select an image
        </SelectImageButton>
        <Typography
          variant="caption"
          display="block"
          sx={{
            mt: 1,
            color: "#6B7280",
            fontSize: "0.875rem",
          }}
        >
          Recommended size: 400×400px
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "#6B7280",
          my: 2,
          position: "relative",
          width: "100%",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            width: "40%",
            height: "1px",
            backgroundColor: "#E5E7EB",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: "50%",
            width: "40%",
            height: "1px",
            backgroundColor: "#E5E7EB",
          },
        }}
      >
        Or select color
      </Typography>

      <AvatarPreview sx={{ bgcolor: formData.profileColor }}>J</AvatarPreview>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: -2,
        }}
      >
        {colors.map((color) => (
          <ColorButton
            key={color.hex}
            onClick={() => handleColorSelect(color.hex)}
            sx={{
              bgcolor: color.hex,
              border:
                formData.profileColor === color.hex
                  ? "2px solid #7C3AED"
                  : "none",
              "&:hover": {
                bgcolor: color.hex,
              },
            }}
            aria-label={`Select ${color.label}`}
          />
        ))}
      </Box>

      <Dialog open={openDialog} onClose={handleCancel} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: "center" }}>
          Choose your profile photo:
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", pb: 4 }}>
          {previewUrl && (
            <Box
              component="img"
              src={previewUrl}
              alt="Profile preview"
              sx={{
                width: 128,
                height: 128,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                my: 2,
              }}
            />
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{ minWidth: 100 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{ minWidth: 100 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfilePhotoStep;
