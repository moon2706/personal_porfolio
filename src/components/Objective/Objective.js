import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Objective = () => {
  return (
    <Box
      id="objective"
      sx={{
        py: 8,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Objective
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              '&:hover': {
                transform: 'translateY(-5px)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              As a Computer Science Engineering student, I am passionate about solving complex problems through
              innovative technology. With a solid foundation in programming and a commitment to continuous
              learning, I aim to contribute effectively to challenging projects while advancing my skills in the field.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Objective;
