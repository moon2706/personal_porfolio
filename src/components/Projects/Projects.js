import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Fake Job Recruitment Detection',
    description: 'Identification of potentially fraudulent job postings on platforms like job portals and social media using advanced deep learning techniques.',
    technologies: ['HTML', 'CSS', 'Python', 'Flask', 'TensorFlow/Keras', 'LSTM', 'NLP'],
    domain: ['Deep Learning', 'Fraud Detection'],
    github: '#',
    demo: '#'
  },
  {
    title: 'VigilMart',
    description: 'A modern e-commerce platform with secure payment processing and fraud prevention features, creating a safer shopping environment for users.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
    domain: ['Web Development', 'E-commerce'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Image Entity Extraction',
    description: 'A deep learning project that accurately extracts relevant entities from images, such as objects, people, and text, overcoming limitations of manual annotation.',
    technologies: ['CNN', 'Regex', 'Computer Vision', 'NLP'],
    domain: ['Computer Vision', 'NLP'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: 6,
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom color="primary">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        Domain:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.domain.map((item, i) => (
                          <Chip
                            key={i}
                            label={item}
                            size="small"
                            sx={{ backgroundColor: '#e3f2fd', color: '#1a237e' }}
                          />
                        ))}
                      </Box>
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.demo}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
