import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: 'Email',
    value: 'moon.pat2002@gmail.com',
    link: 'mailto:moon.pat2002@gmail.com'
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: 'Phone',
    value: '+91 6304989015',
    link: 'tel:+916304989015'
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
    title: 'LinkedIn',
    value: 'rishikesh-pradhan',
    link: 'https://linkedin.com/in/rishikesh-pradhan'
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 40 }} />,
    title: 'GitHub',
    value: 'moon2706',
    link: 'https://github.com/moon2706'
  }
];

const Contact = () => {
  return (
    <Box
      id="contact"
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
          Get In Touch
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((contact, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                      backgroundColor: '#f5f5f5'
                    },
                  }}
                >
                  <IconButton
                    component="a"
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#1a237e',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {contact.icon}
                  </IconButton>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    {contact.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="a"
                    href={contact.link}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      '&:hover': {
                        color: '#1a237e',
                      },
                    }}
                  >
                    {contact.value}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
