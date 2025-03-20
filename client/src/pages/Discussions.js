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
  Avatar,
  IconButton,
  Divider,
  Paper
} from '@mui/material';
import {
  ThumbUp,
  Comment,
  Share,
  Add,
  Search,
  Sort
} from '@mui/icons-material';

// Mock data - will be replaced with API calls
const mockDiscussions = [
  {
    id: 1,
    title: "Tips for Remote Work Communication",
    author: {
      name: "Sarah Chen",
      avatar: "SC"
    },
    content: "I recently started a remote position and wanted to share some communication strategies that have worked well for me. Using video calls with captions, having a dedicated Slack channel for important announcements, and utilizing visual collaboration tools have made a huge difference.",
    category: "Work Life",
    tags: ["Remote Work", "Communication", "Professional"],
    likes: 45,
    comments: 12,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    title: "New Accessibility Features in iOS Update",
    author: {
      name: "Mike Johnson",
      avatar: "MJ"
    },
    content: "The latest iOS update includes some great new accessibility features. Here's what I've discovered so far: improved sound recognition, better caption support in FaceTime, and new ASL-friendly emoji options.",
    category: "Technology",
    tags: ["iOS", "Accessibility", "Tech Tips"],
    likes: 38,
    comments: 15,
    timestamp: "5 hours ago"
  }
];

const DiscussionCard = ({ discussion }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(discussion.likes);

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
        <Box className="flex items-center mb-4">
          <Avatar className="mr-3">{discussion.author.avatar}</Avatar>
          <Box>
            <Typography variant="subtitle1">
              {discussion.author.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {discussion.timestamp}
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" className="mb-2">
          {discussion.title}
        </Typography>

        <Typography variant="body1" className="mb-4">
          {discussion.content}
        </Typography>

        <Box className="mb-3">
          <Chip
            label={discussion.category}
            color="primary"
            size="small"
            className="mr-2"
          />
          {discussion.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              size="small"
              className="mr-2"
            />
          ))}
        </Box>

        <Divider className="my-3" />

        <Box className="flex justify-between items-center">
          <Box className="flex items-center space-x-2">
            <Button
              startIcon={<ThumbUp />}
              onClick={handleLike}
              color={liked ? "primary" : "inherit"}
              size="small"
            >
              {likes}
            </Button>
            <Button
              startIcon={<Comment />}
              size="small"
            >
              {discussion.comments}
            </Button>
          </Box>
          <IconButton>
            <Share />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const Discussions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    "All Topics",
    "Work Life",
    "Technology",
    "Education",
    "Social",
    "Health & Wellness",
    "Advocacy"
  ];

  return (
    <div className="py-8">
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h3" component="h1">
          Community Discussions
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
        >
          New Discussion
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-4">
              Categories
            </Typography>
            <Box className="flex flex-col space-y-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category.toLowerCase() ? "contained" : "text"}
                  color="primary"
                  fullWidth
                  className="justify-start"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box className="mb-6">
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search discussions..."
                  InputProps={{
                    startAdornment: <Search className="mr-2 text-gray-400" />
                  }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<Sort />}
                >
                  Sort by: Latest
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            {mockDiscussions.map((discussion) => (
              <Grid item xs={12} key={discussion.id}>
                <DiscussionCard discussion={discussion} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Discussions;