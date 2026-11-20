import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom';

export const Logo = ({ size = 'medium', showTagline = true, _light = false }) => {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const iconSize = isLarge ? 42 : isSmall ? 26 : 34;

  return (
    <Box
      component={Link}
      to="/login"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        gap: 1.5,
        userSelect: 'none',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: iconSize + 16,
          height: iconSize + 16,
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
          color: '#000000',
          boxShadow: '0 4px 20px rgba(245, 158, 11, 0.45)',
        }}
      >
        <SchoolIcon sx={{ fontSize: iconSize, color: '#000000' }} />
        <AutoAwesomeIcon
          sx={{
            position: 'absolute',
            top: -4,
            right: -4,
            fontSize: iconSize * 0.5,
            color: '#ffffff',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
          }}
        />
      </Box>

      <Box sx={{ textAlign: 'left' }}>
        <Typography
          variant={isLarge ? 'h5' : isSmall ? 'body1' : 'h6'}
          sx={{
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#f8fafc',
            letterSpacing: '-0.02em',
          }}
        >
          Smart School{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Connect
          </Box>
        </Typography>

        {showTagline && (
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 600,
              color: '#d97706',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontSize: '0.65rem',
              mt: 0.25,
            }}
          >
            AI-Powered Academic Intelligence
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Logo;
