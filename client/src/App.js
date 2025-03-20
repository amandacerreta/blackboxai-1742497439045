import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/layout/Layout';

// Import pages (we'll create these next)
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Tips from './pages/Tips';
import Classes from './pages/Classes';
import Discussions from './pages/Discussions';
import Laws from './pages/Laws';
import Resources from './pages/Resources';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E40AF', // Blue-700
    },
    secondary: {
      main: '#4B5563', // Gray-600
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents all-caps text in buttons
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
