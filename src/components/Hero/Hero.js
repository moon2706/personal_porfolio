import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0B0B1F, #1a237e)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.2,
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: '#4fc3f7' }}>
                Welcome to My Universe
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                Rishikesh Pradhan
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Exploring the Frontiers of Code
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
                Like a moon orbiting through the vast expanse of technology, 
                I navigate through AI/ML, Web Development, and Software Engineering, 
                crafting innovative solutions to complex problems.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="mailto:moon.pat2002@gmail.com"
                  sx={{
                    mr: 2,
                    backgroundColor: '#fff',
                    color: '#1a237e',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="/resume_cv.pdf"
                  download
                  sx={{
                    borderColor: '#4fc3f7',
                    color: '#4fc3f7',
                    '&:hover': {
                      borderColor: '#82b1ff',
                      color: '#82b1ff',
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/moon3.jpg"
                alt="Moon"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '50%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-20px)',
                    },
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
