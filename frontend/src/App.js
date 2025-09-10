import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import HomeHero from "./components/HomeHero";
import { getProducts } from "./services/productService";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

function getTheme(mode) {
  return createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#212121' : '#FAFAFA',
        paper: mode === 'dark' ? '#424242' : '#FFFFFF',
      },
      primary: {
        main: '#FFC107',
        contrastText: mode === 'dark' ? '#212121' : '#232946',
      },
      secondary: {
        main: mode === 'dark' ? '#757575' : '#F5F5F5',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#232946',
        secondary: mode === 'dark' ? '#FFC107' : '#757575',
      },
      error: {
        main: '#FF5252',
      },
      warning: {
        main: '#FFC107',
      },
      success: {
        main: '#B9F6CA',
      },
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
            background: mode === 'dark'
              ? 'linear-gradient(90deg, #212121 0%, #FFC107 100%)'
              : 'linear-gradient(90deg, #FFF8E1 0%, #FFC107 100%)',
            color: mode === 'dark' ? '#fff' : '#232946',
            boxShadow: mode === 'dark'
              ? '0 2px 8px 0 rgba(33,33,33,0.10)'
              : '0 2px 8px 0 rgba(255,193,7,0.10)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            background: mode === 'dark'
              ? 'linear-gradient(90deg, #FFC107 0%, #424242 100%)'
              : 'linear-gradient(90deg, #FFC107 0%, #FFF8E1 100%)',
            color: mode === 'dark' ? '#212121' : '#232946',
            '&:hover': {
              background: mode === 'dark'
                ? 'linear-gradient(90deg, #424242 0%, #FFC107 100%)'
                : 'linear-gradient(90deg, #FFF8E1 0%, #FFC107 100%)',
              color: '#FFC107',
            },
          },
          outlined: {
            borderColor: '#FFC107',
            color: '#FFC107',
            background: mode === 'dark' ? 'rgba(255,193,7,0.05)' : 'rgba(255,193,7,0.05)',
            '&:hover': {
              borderColor: mode === 'dark' ? '#424242' : '#FFF8E1',
              color: mode === 'dark' ? '#424242' : '#FFF8E1',
              background: mode === 'dark'
                ? 'rgba(66,66,66,0.15)'
                : 'rgba(255,248,225,0.15)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: mode === 'dark' ? '#424242' : '#FFFFFF',
          },
        },
      },
    },
  });
}

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState('home');
  const [mode, setMode] = useState('light');

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const handleProductUpdated = (updatedProduct) => {
    setProducts(
      products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
    );
  };
  const handleProductDeleted = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Product Management App
              </Typography>
              <Button color="inherit" onClick={() => setPage('home')}>Home</Button>
              <Button color="inherit" onClick={() => setPage('products')}>Products</Button>
              <Button color="inherit" onClick={() => setPage('add')}>Add Product</Button>
              <Button color="inherit" onClick={toggleMode} sx={{ ml: 2 }}>
                {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Button>
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
