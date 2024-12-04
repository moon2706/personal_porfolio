import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: 8,
        backgroundColor: '#fff',
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
          Education
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: '#1a237e' }}>
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#1a237e' }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                      }}
                    >
                      <Typography variant="h6" component="h3" color="primary">
                        Bachelor of Technology
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        Computer Science and Engineering (AI&ML)
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Institute of Aeronautical Engineering, Hyderabad
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        2021 - Present
                      </Typography>
                      <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                        CGPA: 7.38
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/moon.jpeg"
              alt="Moon"
              sx={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '50%',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
