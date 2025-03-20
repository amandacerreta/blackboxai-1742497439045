import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  TextField,
  Chip,
  Link,
  Paper,
  IconButton
} from '@mui/material';
import {
  Search,
  Language,
  Phone,
  Email,
  LocationOn,
  BookmarkBorder,
  Bookmark,
  Share,
  OpenInNew
} from '@mui/icons-material';

// Mock data - will be replaced with API calls
const mockResources = {
  organizations: [
    {
      id: 1,
      name: "National Association of the Deaf",
      description: "The nation's premier civil rights organization of, by, and for deaf and hard of hearing individuals in the United States.",
      website: "https://www.nad.org",
      contact: {
        phone: "301-587-1788",
        email: "contact@nad.org",
        location: "Silver Spring, MD"
      },
      category: "Advocacy",
      tags: ["Legal Rights", "Advocacy", "Community Support"]
    },
    {
      id: 2,
      name: "Deaf Professional Network",
      description: "A professional networking organization dedicated to advancing career opportunities for deaf and hard of hearing individuals.",
      website: "https://example.com/dpn",
      contact: {
        email: "info@dpn.org",
        location: "Virtual Organization"
      },
      category: "Professional",
      tags: ["Career Development", "Networking", "Professional Growth"]
    }
  ],
  services: [
    {
      id: 3,
      name: "Video Relay Service Directory",
      description: "Comprehensive directory of VRS providers and services available nationwide.",
      website: "https://example.com/vrs",
      category: "Communication",
      tags: ["VRS", "Communication", "Technology"]
    }
  ],
  tools: [
    {
      id: 4,
      name: "Accessibility Tools Database",
      description: "Collection of software, apps, and devices designed to enhance accessibility for deaf individuals.",
      website: "https://example.com/tools",
      category: "Technology",
      tags: ["Technology", "Apps", "Devices"]
    }
  ]
};

const ResourceCard = ({ resource }) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent>
        <Box className="flex justify-between items-start mb-3">
          <Typography variant="h6" component="h3" className="text-blue-600">
            {resource.name}
          </Typography>
          <Box>
            <IconButton onClick={() => setBookmarked(!bookmarked)}>
              {bookmarked ? <Bookmark color="primary" /> : <BookmarkBorder />}
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body1" className="mb-4">
          {resource.description}
        </Typography>

        {resource.contact && (
          <Box className="mb-4">
            {resource.contact.phone && (
              <Box className="flex items-center mb-2">
                <Phone className="text-gray-500 mr-2" fontSize="small" />
                <Typography variant="body2">{resource.contact.phone}</Typography>
              </Box>
            )}
            {resource.contact.email && (
              <Box className="flex items-center mb-2">
                <Email className="text-gray-500 mr-2" fontSize="small" />
                <Typography variant="body2">{resource.contact.email}</Typography>
              </Box>
            )}
            {resource.contact.location && (
              <Box className="flex items-center mb-2">
                <LocationOn className="text-gray-500 mr-2" fontSize="small" />
                <Typography variant="body2">{resource.contact.location}</Typography>
              </Box>
            )}
          </Box>
        )}

        <Box className="mb-4">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Language />}
            endIcon={<OpenInNew />}
            component={Link}
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
          >
            Visit Website
          </Button>
        </Box>

        <Box>
          <Chip
            label={resource.category}
            color="primary"
            size="small"
            className="mr-2 mb-2"
          />
          {resource.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              size="small"
              className="mr-2 mb-2"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'organizations', name: 'Organizations' },
    { id: 'services', name: 'Services' },
    { id: 'tools', name: 'Tools & Technology' },
    { id: 'education', name: 'Education' },
    { id: 'employment', name: 'Employment' }
  ];

  return (
    <div className="py-8">
      <Typography variant="h3" component="h1" className="mb-6">
        Resources & Support
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-4">
              Categories
            </Typography>
            <Box className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "contained" : "text"}
                  color="primary"
                  fullWidth
                  onClick={() => setSelectedCategory(category.id)}
                  className="justify-start"
                >
                  {category.name}
                </Button>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search resources..."
              InputProps={{
                startAdornment: <Search className="mr-2 text-gray-400" />
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>

          <Typography variant="h5" className="mb-4">
            Organizations
          </Typography>
          <Grid container spacing={3} className="mb-6">
            {mockResources.organizations.map((resource) => (
              <Grid item xs={12} md={6} key={resource.id}>
                <ResourceCard resource={resource} />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" className="mb-4">
            Services
          </Typography>
          <Grid container spacing={3} className="mb-6">
            {mockResources.services.map((resource) => (
              <Grid item xs={12} md={6} key={resource.id}>
                <ResourceCard resource={resource} />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" className="mb-4">
            Tools & Technology
          </Typography>
          <Grid container spacing={3}>
            {mockResources.tools.map((resource) => (
              <Grid item xs={12} md={6} key={resource.id}>
                <ResourceCard resource={resource} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resources;