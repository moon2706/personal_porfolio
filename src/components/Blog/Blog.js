import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'My Journey into AI',
      date: 'October 15, 2023',
      excerpt: 'Exploring the world of Artificial Intelligence and Machine Learning has been a transformative experience...'
    },
    {
      title: 'React vs. Angular: My Thoughts',
      date: 'September 20, 2023',
      excerpt: 'Having worked with both React and Angular, here are my thoughts on their differences and strengths...'
    },
    {
      title: 'The Future of Web Development',
      date: 'August 5, 2023',
      excerpt: 'Web development is an ever-evolving field. Here are some trends that I believe will shape its future...'
    }
  ];

  return (
    <Box
      sx={{
        py: 8,
        minHeight: '100vh',
        backgroundImage: 'url(/bg_img.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6, color: 'white' }}
        >
          Blog
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {post.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                  <Button size="small" sx={{ mt: 2, ml: 2 }}>
                    Read More
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;