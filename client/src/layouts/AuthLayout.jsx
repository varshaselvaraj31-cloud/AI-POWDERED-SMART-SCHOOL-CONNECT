import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Logo from '../components/common/Logo.jsx';

export const AuthLayout = ({
  children,
  title,
  subtitle,
  badgeText = 'School Portal',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const highlights = [
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 18, color: '#fbbf24' }} />,
      text: 'AI-Powered Attendance & Anomaly Tracking',
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 18, color: '#f59e0b' }} />,
      text: 'Predictive Academic Performance Analytics',
    },
    {
      icon: <NotificationsActiveIcon sx={{ fontSize: 18, color: '#fbbf24' }} />,
      text: 'Real-Time Parent & Teacher Collaboration',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 18, color: '#f59e0b' }} />,
      text: 'Role-Based Secure Academic Protection',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#0a0d14', // Deep Rich Black
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 3, md: 5 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="lg" sx={{ p: '0 !important' }}>
        <Card
          sx={{
            overflow: 'hidden',
            borderRadius: { xs: 3, md: 4 },
            bgcolor: '#121722',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 15px rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
          }}
        >
          <Grid container sx={{ minHeight: { md: 680 } }}>
            {/* Left Brand Showcase Banner */}
            {!isMobile && (
              <Grid
                size={{ md: 5.2, lg: 5 }}
                sx={{
                  background: 'linear-gradient(145deg, #07090e 0%, #10141e 45%, #181f2e 100%)',
                  color: '#ffffff',
                  p: { md: 5, lg: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRight: '1px solid rgba(245, 158, 11, 0.18)',
                }}
              >
                {/* Gold glow accent circles */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -60,
                    right: -60,
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0) 70%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -50,
                    left: -50,
                    width: 190,
                    height: 190,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(217, 119, 6, 0.25) 0%, rgba(217, 119, 6, 0) 70%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top: Logo */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Logo size="large" showTagline={false} />
                  <Chip
                    icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important', color: '#000000 !important' }} />}
                    label="AI Academic Engine"
                    size="small"
                    sx={{
                      mt: 2.5,
                      background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                      color: '#000000',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      boxShadow: '0 2px 10px rgba(245, 158, 11, 0.3)',
                    }}
                  />
                </Box>

                {/* Center: Educational Pitch */}
                <Box sx={{ position: 'relative', zIndex: 1, my: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.25,
                      color: '#ffffff',
                      mb: 1.5,
                      fontSize: { md: '1.9rem', lg: '2.1rem' },
                    }}
                  >
                    Empowering Modern Schools with{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      AI Intelligence
                    </Box>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.925rem',
                      lineHeight: 1.6,
                      mb: 4,
                    }}
                  >
                    A unified smart ecosystem connecting teachers, students, and parents
                    with predictive academic insights and real-time collaboration.
                  </Typography>

                  {/* Highlights Stack */}
                  <Stack spacing={1.75}>
                    {highlights.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.25,
                          borderRadius: 2.5,
                          bgcolor: 'rgba(245, 158, 11, 0.06)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(245, 158, 11, 0.16)',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>{item.icon}</Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: '#f8fafc',
                            fontSize: '0.85rem',
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                {/* Bottom: Footer */}
                <Box sx={{ position: 'relative', zIndex: 1, pt: 2, borderTop: '1px solid rgba(245, 158, 11, 0.15)' }}>
                  <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                    © 2026 AI-Powered Smart School Connect. Academic Systems Division.
                  </Typography>
                </Box>
              </Grid>
            )}

            {/* Right: Interactive Form Area */}
            <Grid
              size={{ xs: 12, md: 6.8, lg: 7 }}
              sx={{
                bgcolor: '#121722', // Sleek Obsidian
                p: { xs: 3, sm: 5, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {isMobile && (
                <Box sx={{ mb: 3.5, textAlign: 'center' }}>
                  <Logo size="medium" />
                </Box>
              )}

              {/* Form Header */}
              <Box sx={{ mb: 3.5, textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Chip
                    label={badgeText}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(245, 158, 11, 0.12)',
                      color: '#fbbf24',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      fontWeight: 700,
                      fontSize: '0.725rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: '#f8fafc',
                    fontSize: { xs: '1.6rem', sm: '1.9rem' },
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {title}
                </Typography>

                {subtitle && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.925rem',
                      mt: 0.75,
                    }}
                  >
                    {subtitle}
                  </Typography>
                )}
              </Box>

              {/* Active Form Content */}
              {children}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default AuthLayout;
