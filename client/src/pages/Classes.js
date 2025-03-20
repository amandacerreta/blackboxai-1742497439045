import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Rating
} from '@mui/material';
import {
  Person,
  Schedule,
  VideoCall
} from '@mui/icons-material';

// Mock data - will be replaced with API calls
const mockClasses = [
  {
    id: 1,
    title: "Advanced ASL for Professional Settings",
    instructor: "Prof. Lisa Chen",
    description: "Learn professional ASL vocabulary and etiquette for workplace communication. Perfect for those looking to advance their career or improve workplace interactions.",
    image: "https://picsum.photos/400/200",
    type: "Live Online",
    schedule: "Tuesdays and Thursdays, 6-8 PM EST",
    duration: "8 weeks",
    level: "Advanced",
    price: 299,
    rating: 4.8,
    reviews: 45,
    tags: ["ASL", "Professional", "Business"]
  },
  {
    id: 2,
    title: "Digital Accessibility Workshop",
    instructor: "David Thompson",
    description: "Learn how to create and advocate for accessible digital content. Covers WCAG guidelines, assistive technologies, and best practices.",
    image: "https://picsum.photos/400/201",
    type: "Self-Paced",
    schedule: "Flexible",
    duration: "4 weeks",
    level: "Intermediate",
    price: 149,
    rating: 4.6,
    reviews: 32,
    tags: ["Technology", "Accessibility", "Web"]
  }
];

const ClassCard = ({ course }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardMedia
      component="img"
      height="200"
      image={course.image}
      alt={course.title}
      className="h-48 object-cover"
    />
    <CardContent>
      <Box className="flex justify-between items-start mb-2">
        <Typography variant="h5" component="h2" className="text-blue-600">
          {course.title}
        </Typography>
        <Chip 
          label={course.type}
          color={course.type === "Live Online" ? "primary" : "secondary"}
          size="small"
        />
      </Box>

      <Box className="flex items-center mb-2">
        <Person className="text-gray-500 mr-2" />
        <Typography variant="subtitle2" color="text.secondary">
          {course.instructor}
        </Typography>
      </Box>

      <Box className="flex items-center mb-2">
        <Schedule className="text-gray-500 mr-2" />
        <Typography variant="body2" color="text.secondary">
          {course.schedule}
        </Typography>
      </Box>

      <Typography variant="body2" className="mb-3">
        {course.description}
      </Typography>

      <Box className="flex items-center mb-3">
        <Rating value={course.rating} precision={0.1} readOnly size="small" />
        <Typography variant="body2" color="text.secondary" className="ml-2">
          ({course.reviews} reviews)
        </Typography>
      </Box>

      <Box className="mb-3">
        {course.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size="small"
            className="mr-2 mb-2"
            variant="outlined"
          />
        ))}
      </Box>

      <Box className="flex justify-between items-center mt-4">
        <Typography variant="h6" color="primary">
          ${course.price}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<VideoCall />}
        >
          Enroll Now
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [level, setLevel] = useState('all');
  const [type, setType] = useState('all');

  return (
    <div className="py-8">
      <Typography variant="h3" component="h1" className="mb-6">
        Classes & Workshops
      </Typography>

      <Box className="mb-8">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Search Classes"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or instructor"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Level</InputLabel>
              <Select
                value={level}
                label="Level"
                onChange={(e) => setLevel(e.target.value)}
              >
                <MenuItem value="all">All Levels</MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Class Type</InputLabel>
              <Select
                value={type}
                label="Class Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="live">Live Online</MenuItem>
                <MenuItem value="self-paced">Self-Paced</MenuItem>
                <MenuItem value="workshop">Workshop</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {mockClasses.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <ClassCard course={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Classes;