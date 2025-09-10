import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HomeHero({ onProductsClick, onAddClick }) {
  
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #232323 0%, #424242 100%)',
        borderRadius: 4,
        boxShadow: '0 4px 24px 0 rgba(33,33,33,0.10)',
        mt: 4,
        mb: 4,
        px: { xs: 2, sm: 6 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: '#FFC107',
          mb: 2,
          textAlign: 'center',
          letterSpacing: 1,
          textShadow: '0 2px 8px #212121',
        }}
      >
        Welcome to Product Manager
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: '#fff',
          mb: 4,
          textAlign: 'center',
          maxWidth: 600,
        }}
      >
        Effortlessly manage your products with a modern, professional dashboard. Add, edit, and organize your inventory with ease.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            px: 4,
            fontWeight: 700,
            boxShadow: '0 2px 8px 0 rgba(33,33,33,0.10)',
            background: 'linear-gradient(90deg, #FFC107 0%, #424242 100%)',
            color: '#212121',
            '&:hover': {
              background: 'linear-gradient(90deg, #424242 0%, #FFC107 100%)',
              color: '#FFC107',
            },
          }}
          onClick={onProductsClick}
        >
          View Products
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            px: 4,
            fontWeight: 700,
            borderColor: '#FFC107',
            color: '#FFC107',
            background: 'rgba(255,193,7,0.05)',
            '&:hover': {
              borderColor: '#424242',
              color: '#424242',
              background: 'rgba(66,66,66,0.15)',
            },
          }}
          onClick={onAddClick}
        >
          Add Product
        </Button>
      </Box>
    </Box>
  );
}
