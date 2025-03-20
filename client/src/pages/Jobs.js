import React, { useState } from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Box,
  TextField,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { 
  Business,
  LocationOn,
  AccessTime 
} from '@mui/icons-material';

// Mock data - will be replaced with API calls
const mockJobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-time",
    description: "Looking for a skilled software developer with experience in web development...",
    requirements: ["React", "JavaScript", "Node.js"],
    deafFriendly: true,
    postedDate: "2024-01-15"
  },
  {
    id: 2,
    title: "ASL Interpreter",
    company: "Community Services",
    location: "New York, NY",
    type: "Part-time",
    description: "Seeking certified ASL interpreter for educational setting...",
    requirements: ["ASL Certification", "Experience in Education"],
    deafFriendly: true,
    postedDate: "2024-01-14"
  }
];

const JobCard = ({ job }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent>
      <Box className="flex justify-between items-start mb-4">
        <Typography variant="h5" component="h2" className="text-blue-600">
          {job.title}
        </Typography>
        {job.deafFriendly && (
          <Chip 
            label="Deaf-Friendly" 
            color="primary" 
            size="small"
            className="ml-2" 
          />
        )}
      </Box>

      <Box className="flex items-center mb-2">
        <Business className="text-gray-500 mr-2" />
        <Typography variant="subtitle1" color="text.secondary">
          {job.company}
        </Typography>
      </Box>

      <Box className="flex items-center mb-2">
        <LocationOn className="text-gray-500 mr-2" />
        <Typography variant="body2" color="text.secondary">
          {job.location}
        </Typography>
      </Box>

      <Box className="flex items-center mb-4">
        <AccessTime className="text-gray-500 mr-2" />
        <Typography variant="body2" color="text.secondary">
          {job.type}
        </Typography>
      </Box>

      <Typography variant="body1" className="mb-4">
        {job.description}
      </Typography>

      <Box className="mb-4">
        {job.requirements.map((req, index) => (
          <Chip 
            key={index} 
            label={req} 
            variant="outlined" 
            size="small" 
            className="mr-2 mb-2" 
          />
        ))}
      </Box>

      <Button 
        variant="contained" 
        color="primary" 
        fullWidth
        className="mt-2"
      >
        Apply Now
      </Button>
    </CardContent>
  </Card>
);

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('all');

  return (
    <div className="py-8">
      <Typography variant="h3" component="h1" className="mb-6">
        Job Opportunities
      </Typography>

      <Box className="mb-8">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Jobs"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, company, or keywords"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Job Type</InputLabel>
              <Select
                value={jobType}
                label="Job Type"
                onChange={(e) => setJobType(e.target.value)}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="full-time">Full-time</MenuItem>
                <MenuItem value="part-time">Part-time</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {mockJobs.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Jobs;