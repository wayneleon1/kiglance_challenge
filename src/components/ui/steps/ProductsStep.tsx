import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import { useProducts } from "@/hooks/useProducts";

interface ProductsStepProps {
  formData: { products: string[] };
  updateFormData: (field: string, value: any) => void;
}

const ProductsStep: React.FC<ProductsStepProps> = ({
  formData,
  updateFormData,
}) => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const toggleProduct = (productName: string) => {
    const newProducts = formData.products.includes(productName)
      ? formData.products.filter((p) => p !== productName)
      : [...formData.products, productName];
    updateFormData("products", newProducts);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={product.image} sx={{ mr: 2 }} />
              <Typography>{product.name}</Typography>
            </Box>
            <IconButton onClick={() => toggleProduct(product.name)}>
              {formData.products.includes(product.name) ? (
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
