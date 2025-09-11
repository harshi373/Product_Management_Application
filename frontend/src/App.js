import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import HomeHero from "./components/HomeHero";
import ProductIcon from "./components/ProductIcon";
import { getProducts } from "./services/productService";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function getTheme() {
  return createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#222326', // charcoal black
        paper: '#2d2d2d',   // slightly lighter charcoal
      },
      primary: {
        main: '#FFC107', // amber
        contrastText: '#222326',
      },
      secondary: {
        main: '#222326', // charcoal black
        contrastText: '#FFC107',
      },
      text: {
        primary: '#fff',
        secondary: '#FFC107',
      },
      divider: '#2d2d2d',
    },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      h2: { fontWeight: 800 },
      h6: { fontWeight: 700 },
      button: { fontWeight: 700 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(135deg, #222326 0%, #FFC107 100%)',
            color: '#fff',
            boxShadow: '0 4px 24px 0 rgba(33,33,33,0.10)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            borderRadius: 12,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #FFC107 0%, #222326 100%)',
            color: '#222326',
            boxShadow: '0 2px 8px 0 rgba(33,33,33,0.10)',
            '&:hover': {
              background: 'linear-gradient(90deg, #222326 0%, #FFC107 100%)',
              color: '#FFC107',
            },
          },
          outlinedPrimary: {
            borderRadius: 12,
            fontWeight: 700,
            borderColor: '#FFC107',
            color: '#FFC107',
            background: 'rgba(255,193,7,0.05)',
            '&:hover': {
              borderColor: '#222326',
              color: '#222326',
              background: 'rgba(34,35,38,0.15)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(135deg, #222326 0%, #2d2d2d 100%)',
            color: '#fff',
          },
        },
      },
    },
  });
}

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState('home');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const theme = useMemo(() => getTheme(), []);

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
    setSnackbarOpen(true);
    setPage('products');
  };
  const handleProductUpdated = (updatedProduct) => {
    setProducts(
      products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
    );
  };
  const handleProductDeleted = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
          <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <MuiAlert 
              onClose={handleSnackbarClose} 
              severity="success" 
              sx={{ width: '100%', bgcolor: '#111', color: '#fff', border: '1px solid #fff', fontWeight: 700 }} 
              elevation={6} 
              variant="filled"
            >
              Product added! Check in Products.
            </MuiAlert>
          </Snackbar>
          <AppBar position="static">
            <Toolbar>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <ProductIcon sx={{ fontSize: { xs: 36, sm: 44 }, mr: 1, color: '#FFC107' }} />
                <Typography variant="h6" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 800 }}>
                  Product Management App
                </Typography>
              </Box>
              <Button 
                color="inherit" 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.25rem' }, 
                  fontWeight: 700, 
                  transition: 'color 0.2s',
                  '&:hover': { color: '#FFC107', backgroundColor: 'rgba(255,255,255,0.04)' }
                }} 
                onClick={() => setPage('home')}
              >Home</Button>
              <Button 
                color="inherit" 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.25rem' }, 
                  fontWeight: 700, 
                  transition: 'color 0.2s',
                  '&:hover': { color: '#FFC107', backgroundColor: 'rgba(255,255,255,0.04)' }
                }} 
                onClick={() => setPage('products')}
              >Products</Button>
              <Button 
                color="inherit" 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.25rem' }, 
                  fontWeight: 700, 
                  transition: 'color 0.2s',
                  '&:hover': { color: '#FFC107', backgroundColor: 'rgba(255,255,255,0.04)' }
                }} 
                onClick={() => setPage('add')}
              >Add Product</Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ p: 3 }}>
            {page === 'home' && (
              <HomeHero 
                onProductsClick={() => setPage('products')}
                onAddClick={() => setPage('add')}
              />
            )}
            {page === 'products' && (
              <ProductList
                products={products}
                onProductUpdated={handleProductUpdated}
                onProductDeleted={handleProductDeleted}
              />
            )}
            {page === 'add' && (
              <AddProductForm onProductAdded={handleProductAdded} />
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;