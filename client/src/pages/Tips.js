import React, { useState } from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Tabs,
  Tab,
  Chip,
  IconButton,
  Button
} from '@mui/material';
import {
  Lightbulb,
  Work,
  School,
  People,
  ThumbUp,
  Share,
  Bookmark,
  BookmarkBorder
} from '@mui/icons-material';

// Mock data - will be replaced with API calls
const mockTips = {
  workplace: [
    {
      id: 1,
      title: "Effective Communication in the Workplace",
      content: "When communicating with hearing colleagues, consider using a combination of written communication tools like email, chat, and visual aids. Always keep a notepad or digital device handy for quick written exchanges.",
      author: "Sarah Johnson",
      likes: 156,
      category: "workplace",
      tags: ["Communication", "Workplace Tips", "Professional Development"]
    },
    {
      id: 2,
      title: "Requesting Accommodations",
      content: "Know your rights under the ADA. Document your accommodation requests in writing and be specific about what you need to perform your job effectively. Follow up with HR if needed.",
      author: "Michael Chen",
      likes: 142,
      category: "workplace",
      tags: ["ADA Rights", "Accommodations", "Workplace"]
    }
  ],
  education: [
    {
      id: 3,
      title: "Making the Most of Online Learning",
      content: "Ensure your learning platform provides closed captions. Request transcripts in advance and use visual learning tools when available. Don't hesitate to ask for clarification.",
      author: "Dr. Emily Roberts",
      likes: 98,
      category: "education",
      tags: ["Online Learning", "Education", "Study Tips"]
    }
  ],
  social: [
    {
      id: 4,
      title: "Building Strong Social Connections",
      content: "Join deaf community groups and events in your area. Many cities have regular meetups and social gatherings. Social media platforms can also help you connect with others who share similar experiences.",
      author: "David Thompson",
      likes: 203,
      category: "social",
      tags: ["Social Life", "Community", "Networking"]
    }
  ],
  technology: [
    {
      id: 5,
      title: "Latest Accessibility Apps",
      content: "Stay updated with the latest apps designed for the deaf community. Many offer real-time captioning, visual alerts, and sign language translation features.",
      author: "Tech Review Team",
      likes: 175,
      category: "technology",
      tags: ["Technology", "Apps", "Accessibility"]
    }
  ]
};

const TipCard = ({ tip, onSave }) => {
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(tip.likes);
  const [liked, setLiked] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    onSave(tip.id);
  };

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent>
        <Box className="flex justify-between items-start mb-2">
          <Typography variant="h6" component="h3" className="text-blue-600">
            {tip.title}
          </Typography>
          <IconButton onClick={handleSave}>
            {saved ? <Bookmark color="primary" /> : <BookmarkBorder />}
          </IconButton>
        </Box>

        <Typography variant="body1" className="mb-4">
          {tip.content}
        </Typography>

        <Box className="mb-3">
          {tip.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              className="mr-2 mb-2"
              variant="outlined"
            />
          ))}
        </Box>

        <Box className="flex justify-between items-center text-gray-600">
          <Typography variant="body2">
            By {tip.author}
          </Typography>
          <Box className="flex items-center">
            <Button
              startIcon={<ThumbUp />}
              onClick={handleLike}
              color={liked ? "primary" : "inherit"}
              size="small"
            >
              {likes}
            </Button>
            <IconButton size="small">
              <Share />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const Tips = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const categories = [
    { label: "Workplace", icon: <Work />, value: "workplace" },
    { label: "Education", icon: <School />, value: "education" },
    { label: "Social", icon: <People />, value: "social" },
    { label: "Technology", icon: <Lightbulb />, value: "technology" }
  ];

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSaveTip = (tipId) => {
    // Will be implemented with backend integration
    console.log(`Tip ${tipId} saved`);
  };

  return (
    <div className="py-8">
      <Typography variant="h3" component="h1" className="mb-6">
        Tips & Advice
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-6">
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="tips categories tabs"
        >
          {categories.map((category, index) => (
            <Tab
              key={index}
              icon={category.icon}
              label={category.label}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {mockTips[categories[currentTab].value]?.map((tip) => (
          <Grid item xs={12} md={6} key={tip.id}>
            <TipCard tip={tip} onSave={handleSaveTip} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tips;