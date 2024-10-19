// ProductsStep.tsx
import React from "react";
import { Box, Typography, TextField, Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";

interface ProductsStepProps {
  formData: { products: string[] };
  updateFormData: (field: string, value: any) => void;
}

const ProductsStep: React.FC<ProductsStepProps> = ({
  formData,
  updateFormData,
}) => {
  const products = [
    "Google Analytics",
    "Facebook Analytics",
    "Twitter Analytics",
    "Pinterest Analytics",
  ];

  const toggleProduct = (product: string) => {
    const newProducts = formData.products.includes(product)
      ? formData.products.filter((p) => p !== product)
      : [...formData.products, product];
    updateFormData("products", newProducts);
  };

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
      <Box sx={{ height: "300px", overflow: "auto" }}>
        {products.map((product, index) => (
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
            <IconButton onClick={() => toggleProduct(product)}>
              {formData.products.includes(product) ? (
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
};

export default ProductsStep;
