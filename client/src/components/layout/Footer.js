import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-900 text-white py-8 mt-auto">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="mb-4">
              About Us
            </Typography>
            <Typography variant="body2">
              Dedicated to empowering the deaf and hard of hearing community through accessible resources, 
              job opportunities, and community support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="mb-4">
              Quick Links
            </Typography>
            <Box className="flex flex-col space-y-2">
              <Link href="/jobs" color="inherit" className="hover:text-blue-300">Jobs</Link>
              <Link href="/tips" color="inherit" className="hover:text-blue-300">Tips</Link>
              <Link href="/classes" color="inherit" className="hover:text-blue-300">Classes</Link>
              <Link href="/discussions" color="inherit" className="hover:text-blue-300">Discussions</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="mb-4">
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: support@deafcommunityhub.com<br />
              Phone (TTY): 1-800-XXX-XXXX<br />
              VideoPhone: 1-800-XXX-XXXX
            </Typography>
          </Grid>
        </Grid>
        <Box className="text-center mt-8 pt-4 border-t border-gray-700">
          <Typography variant="body2">
            © {new Date().getFullYear()} Deaf Community Hub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;