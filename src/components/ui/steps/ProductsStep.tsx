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
      <Box sx={{ px: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, textAlign: "center", fontWeight: 500 }}
        >
          Select 3+ products that you use
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 1.5, textAlign: "center", color: "text.secondary" }}
        >
          Build your tech stack from the get-go.
        </Typography>

        <Box sx={{ mb: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1.5,
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
              bgcolor: "#FFFFFF",
            }}
          >
            <SearchIcon
              sx={{ fontSize: 18, color: "text.secondary", mr: 0.5 }}
            />
            <InputBase
              fullWidth
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ ml: 0.5, fontSize: "0.875rem" }}
            />
            {searchTerm && (
              <IconButton size="small" onClick={() => setSearchTerm("")}>
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            )}
          </Box>
          <Box
            sx={{
              mt: 1.5,
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
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
                    sx={{ width: 20, height: 20 }}
                  />
                }
                deleteIcon={<CloseIcon sx={{ fontSize: 16 }} />}
                sx={{
                  borderRadius: "4px",
                  bgcolor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  "& .MuiChip-deleteIcon": {
                    color: "#6B7280",
                  },
                  fontSize: "0.75rem",
                  height: 28,
                }}
              />
            ))}
          </Box>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 500 }}>
          Products
        </Typography>
        <Box
          sx={{
            height: "calc(100vh - 450px)",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#E5E7EB",
              borderRadius: "3px",
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
                p: 1.5,
                mb: 1,
                borderRadius: "6px",
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
                    width: 32,
                    height: 32,
                    borderRadius: "6px",
                    mr: 1,
                    objectFit: "cover",
                  }}
                />
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  {product.name}
                </Typography>
              </Box>
              {formData.products.includes(product.name) ? (
                <CloseIcon sx={{ fontSize: 18, color: "#6B7280" }} />
              ) : (
                <AddIcon sx={{ fontSize: 18, color: "#6B7280" }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsStep;
