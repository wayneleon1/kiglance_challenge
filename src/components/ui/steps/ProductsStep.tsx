import React, { useState } from "react";
import { Box, Typography, InputBase, Chip, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
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

  return (
    <Box>
      <Box sx={{ px: 3 }}>
        <Typography
          variant="h6"
          sx={{ mb: 1, textAlign: "center", fontWeight: 600 }}
        >
          Select 3+ products that you use
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, textAlign: "center", color: "text.secondary" }}
        >
          Build your tech stack from the get go.
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              bgcolor: "#FFFFFF",
            }}
          >
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
            <InputBase
              fullWidth
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ ml: 1 }}
            />
            {searchTerm && (
              <IconButton size="small" onClick={() => setSearchTerm("")}>
                <CloseIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {formData.products.map((productName) => (
              <Chip
                key={productName}
                label={productName}
                onDelete={() => toggleProduct(productName)}
                avatar={
                  <Box
                    component="img"
                    src={
                      products.find((p) => p.name === productName)?.image || ""
                    }
                    sx={{ width: 24, height: 24 }}
                  />
                }
                deleteIcon={<CloseIcon />}
                sx={{
                  borderRadius: "4px",
                  bgcolor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  "& .MuiChip-deleteIcon": {
                    color: "#6B7280",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Products
        </Typography>
        <Box
          sx={{
            height: "calc(100vh - 450px)",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#E5E7EB",
              borderRadius: "4px",
            },
          }}
        >
          {filteredProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                mb: 1,
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#F9FAFB",
                },
              }}
              onClick={() => toggleProduct(product.name)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={product.image}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "8px",
                    mr: 2,
                    objectFit: "cover",
                  }}
                />
                <Typography sx={{ fontWeight: 500 }}>{product.name}</Typography>
              </Box>
              {formData.products.includes(product.name) ? (
                <CloseIcon sx={{ color: "#6B7280" }} />
              ) : (
                <AddIcon sx={{ color: "#6B7280" }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsStep;
