import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Work, 
  Lightbulb, 
  School, 
  Forum, 
  Gavel, 
  LibraryBooks 
} from '@mui/icons-material';

const FeatureCard = ({ icon, title, description, link }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="flex flex-col h-full">
      <Box className="text-center mb-4">
        {icon}
      </Box>
      <Typography variant="h5" component="h2" className="mb-3 text-center">
        {title}
      </Typography>
      <Typography className="text-gray-600 mb-4 flex-grow">
        {description}
      </Typography>
      <Button 
        component={Link} 
        to={link} 
        variant="contained" 
        color="primary" 
        fullWidth
        className="mt-auto"
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
);

const Home = () => {
  const features = [
    {
      icon: <Work className="text-blue-600" sx={{ fontSize: 40 }} />,
      title: "Job Opportunities",
      description: "Find deaf-friendly job opportunities and career resources tailored to your needs.",
      link: "/jobs"
    },
    {
      icon: <Lightbulb className="text-yellow-600" sx={{ fontSize: 40 }} />,
      title: "Tips & Advice",
      description: "Get valuable insights and advice for navigating work and daily life.",
      link: "/tips"
    },
    {
      icon: <School className="text-green-600" sx={{ fontSize: 40 }} />,
      title: "Classes",
      description: "Access educational resources and workshops to enhance your skills.",
      link: "/classes"
    },
    {
      icon: <Forum className="text-purple-600" sx={{ fontSize: 40 }} />,
      title: "Discussions",
      description: "Join our community forums to share experiences and get support.",
      link: "/discussions"
    },
    {
      icon: <Gavel className="text-red-600" sx={{ fontSize: 40 }} />,
      title: "Laws & Rights",
      description: "Learn about your rights and legal protections in the workplace.",
      link: "/laws"
    },
    {
      icon: <LibraryBooks className="text-indigo-600" sx={{ fontSize: 40 }} />,
      title: "Resources",
      description: "Access helpful resources and support services for the deaf community.",
      link: "/resources"
    }
  ];

  return (
    <div className="py-8">
      <Box className="text-center mb-12">
        <Typography variant="h2" component="h1" className="mb-4">
          Welcome to Deaf Community Hub
        </Typography>
        <Typography variant="h5" component="p" className="text-gray-600 max-w-2xl mx-auto">
          Your central resource for jobs, education, and community support for the deaf and hard of hearing community.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;