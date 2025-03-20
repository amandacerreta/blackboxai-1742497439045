import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="text-white no-underline">
            Deaf Community Hub
          </Link>
        </Typography>
        <nav>
          <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
          <Button color="inherit" component={Link} to="/tips">Tips</Button>
          <Button color="inherit" component={Link} to="/classes">Classes</Button>
          <Button color="inherit" component={Link} to="/discussions">Discussions</Button>
          <Button color="inherit" component={Link} to="/laws">Laws</Button>
          <Button color="inherit" component={Link} to="/resources">Resources</Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;