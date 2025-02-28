import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'MySQL'],
  },
  {
    title: 'Front-End Development',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Machine Learning Libraries',
    skills: ['TensorFlow', 'Scikit-learn', 'Numpy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Platforms and Tools',
    skills: ['VS Code', 'Jupyter Notebook', 'Google Colab', 'IntelliJ IDEA'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Teamwork', 'Time Management', 'Adaptability'],
  }
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="primary"
                  >
                    {category.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <Typography
                        key={skillIndex}
                        variant="body2"
                        sx={{
                          backgroundColor: '#e3f2fd',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          color: '#1a237e',
                        }}
                      >
                        {skill}
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

export default Skills;
