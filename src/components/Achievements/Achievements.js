import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const achievements = [
  {
    title: 'Certifications',
    details: [
      'Amazon Web Services ',
      'Python For Data Science (65%) ',
      'Programming, Data Structures And Algorithms Using Python (64%)',
      // 'Amazon Web Services : July 2023 - July 2023',
      // 'Python For Data Science (65%) : July 2023 - Aug 2023',
      // 'Programming, Data Structures And Algorithms Using Python (64%) : July 2023 - Sep 2023'
    ],
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#1a237e' }} />
  },
  {
    title: 'Competitive Programming',
    details: [
      'Leetcode: KNIGHT | Max Rating - 1869 | Top 6% in the world',
      'Leetcode: Solved 600+ problems and achieved more than 10 Badges',
      'CodeChef: Max Rating - 1774',
      'GeeksForGeeks: Max Rating - 1736 | Coding Score: 841 | Solved 250+ problems'
    ],
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#1a237e' }} />
  },
  {
    title: 'Academic & Leadership',
    details: [
      'Amazon ML Challenge - Top 100 Ranking',
      'Volunteer for College Events and Hackathons',
      'Organized technical and non-technical events',
      'Fostered collaborative community engagement'
    ],
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#1a237e' }} />
  }
];

const Achievements = () => {
  return (
    <Box
      id="achievements"
      sx={{
        py: 8,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Achievements
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {achievement.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    color="primary"
                    sx={{ mb: 3 }}
                  >
                    {achievement.title}
                  </Typography>
                  <Box>
                    {achievement.details.map((detail, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
