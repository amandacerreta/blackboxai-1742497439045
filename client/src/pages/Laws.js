import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Chip,
  Paper
} from '@mui/material';
import {
  ExpandMore,
  Gavel,
  Search,
  BookmarkBorder,
  Bookmark,
  InfoOutlined
} from '@mui/icons-material';

// Mock data - will be replaced with API calls
const mockLaws = {
  workplace: [
    {
      id: 1,
      title: "Americans with Disabilities Act (ADA)",
      summary: "The ADA prohibits discrimination against individuals with disabilities in all areas of public life.",
      details: [
        "Title I - Employment: Requires employers to provide reasonable accommodations",
        "Title II - Public Services: Covers public transportation and government services",
        "Title III - Public Accommodations: Addresses private businesses and organizations",
        "Title IV - Telecommunications: Requires telephone and Internet companies to provide services for deaf individuals"
      ],
      lastUpdated: "2023-12-15",
      category: "Federal Law",
      tags: ["Employment", "Discrimination", "Accommodations"]
    },
    {
      id: 2,
      title: "Section 504 of the Rehabilitation Act",
      summary: "Protects individuals with disabilities in programs that receive federal funding.",
      details: [
        "Prohibits discrimination in federal programs",
        "Requires accessibility in educational institutions",
        "Mandates reasonable accommodations in federally funded workplaces",
        "Ensures equal access to federal services"
      ],
      lastUpdated: "2023-11-20",
      category: "Federal Law",
      tags: ["Education", "Federal Programs", "Civil Rights"]
    }
  ],
  education: [
    {
      id: 3,
      title: "Individuals with Disabilities Education Act (IDEA)",
      summary: "Ensures students with disabilities receive appropriate educational services.",
      details: [
        "Requires Free Appropriate Public Education (FAPE)",
        "Mandates Individualized Education Programs (IEPs)",
        "Provides early intervention services",
        "Ensures parent participation in educational decisions"
      ],
      lastUpdated: "2024-01-05",
      category: "Education Law",
      tags: ["Education", "Special Education", "Student Rights"]
    }
  ]
};

const LawCard = ({ law }) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardContent>
        <Box className="flex justify-between items-start mb-3">
          <Typography variant="h6" component="h3" className="text-blue-600">
            {law.title}
          </Typography>
          <Button
            startIcon={bookmarked ? <Bookmark /> : <BookmarkBorder />}
            onClick={() => setBookmarked(!bookmarked)}
            color={bookmarked ? "primary" : "inherit"}
          >
            Save
          </Button>
        </Box>

        <Typography variant="body1" className="mb-4">
          {law.summary}
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Key Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-4">
              {law.details.map((detail, index) => (
                <li key={index} className="mb-2">
                  <Typography variant="body2">{detail}</Typography>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>

        <Box className="mt-4">
          <Chip
            label={law.category}
            color="primary"
            size="small"
            className="mr-2 mb-2"
          />
          {law.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              size="small"
              className="mr-2 mb-2"
            />
          ))}
        </Box>

        <Typography variant="caption" color="text.secondary" className="mt-3 block">
          Last updated: {law.lastUpdated}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Laws = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="py-8">
      <Typography variant="h3" component="h1" className="mb-6">
        Laws & Rights
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper className="p-4 mb-4">
            <Typography variant="h6" className="mb-3">
              Quick Resources
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className="mb-2"
              startIcon={<InfoOutlined />}
            >
              Know Your Rights
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className="mb-2"
              startIcon={<Gavel />}
            >
              Legal Assistance
            </Button>
          </Paper>

          <Paper className="p-4">
            <Typography variant="h6" className="mb-3">
              Categories
            </Typography>
            <Box className="flex flex-col space-y-2">
              <Button variant="contained" color="primary" fullWidth>
                All Laws
              </Button>
              <Button variant="text" color="primary" fullWidth>
                Workplace Rights
              </Button>
              <Button variant="text" color="primary" fullWidth>
                Education Laws
              </Button>
              <Button variant="text" color="primary" fullWidth>
                Healthcare Rights
              </Button>
              <Button variant="text" color="primary" fullWidth>
                Public Access
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search laws and rights..."
              InputProps={{
                startAdornment: <Search className="mr-2 text-gray-400" />
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>

          <Typography variant="h5" className="mb-4">
            Workplace Rights
          </Typography>
          {mockLaws.workplace.map((law) => (
            <LawCard key={law.id} law={law} />
          ))}

          <Typography variant="h5" className="mb-4 mt-6">
            Education Rights
          </Typography>
          {mockLaws.education.map((law) => (
            <LawCard key={law.id} law={law} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Laws;