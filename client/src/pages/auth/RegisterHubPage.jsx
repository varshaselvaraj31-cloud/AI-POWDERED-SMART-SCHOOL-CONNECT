import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Link as MuiLink,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AuthLayout from '../../layouts/AuthLayout.jsx';

const ROLES = [
  {
    key: 'student',
    title: 'Student Portal',
    desc: 'Access your coursework, track homework submissions, view attendance analytics, and ask the AI Tutor for assistance.',
    path: '/register/student',
    icon: <SchoolIcon sx={{ fontSize: 32, color: '#fbbf24' }} />,
    color: 'rgba(245, 158, 11, 0.15)',
    badge: 'Grades 6–12',
  },
  {
    key: 'teacher',
    title: 'Faculty & Teacher',
    desc: 'Manage class attendance, evaluate assignments, automate grading with AI rubrics, and message parents instantly.',
    path: '/register/teacher',
    icon: <MenuBookIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
    color: 'rgba(245, 158, 11, 0.15)',
    badge: 'Authorized Staff',
  },
  {
    key: 'parent',
    title: 'Parent & Guardian',
    desc: 'Monitor real-time student attendance, receive urgent anomaly alerts, view report cards, and communicate with teachers.',
    path: '/register/parent',
    icon: <FamilyRestroomIcon sx={{ fontSize: 32, color: '#d97706' }} />,
    color: 'rgba(245, 158, 11, 0.15)',
    badge: 'Family Connect',
  },
];

export const RegisterHubPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Select your role to get started with Smart School Connect"
      badgeText="Account Registration"
    >
      <Box sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          {ROLES.map((role) => (
            <Grid key={role.key} size={{ xs: 12 }}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3.5,
                  transition: 'all 0.25s ease-in-out',
                  bgcolor: '#181f2e',
                  borderColor: 'rgba(245, 158, 11, 0.22)',
                  '&:hover': {
                    borderColor: '#f59e0b',
                    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.25)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardActionArea
                  onClick={() => navigate(role.path)}
                  sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <CardContent sx={{ p: 0, display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        bgcolor: role.color,
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {role.icon}
                    </Box>

                    <Box sx={{ textAlign: 'left' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#f8fafc' }}>
                          {role.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            px: 1,
                            py: 0.2,
                            borderRadius: 1,
                            bgcolor: 'rgba(245, 158, 11, 0.15)',
                            color: '#fbbf24',
                            border: '1px solid rgba(245, 158, 11, 0.25)',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                          }}
                        >
                          {role.badge}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.825rem', mt: 0.25 }}>
                        {role.desc}
                      </Typography>
                    </Box>
                  </CardContent>

                  <ArrowForwardIcon sx={{ color: '#fbbf24', ml: 1 }} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="body2" sx={{ textAlign: 'center', color: '#94a3b8', mt: 2 }}>
        Already registered?{' '}
        <MuiLink
          component={Link}
          to="/login"
          sx={{
            color: '#fbbf24',
            fontWeight: 800,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline', color: '#f59e0b' },
          }}
        >
          Sign In to Portal
        </MuiLink>
      </Typography>
    </AuthLayout>
  );
};

export default RegisterHubPage;
