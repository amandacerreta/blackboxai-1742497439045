import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box className="min-h-screen flex flex-col">
      <Header />
      <Container component="main" className="flex-grow py-8">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;