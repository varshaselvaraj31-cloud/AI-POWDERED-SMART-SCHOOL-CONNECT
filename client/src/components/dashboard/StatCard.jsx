import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

/**
 * StatCard – One of the four summary cards at the top of the Student Dashboard.
 * Displays an icon, stat value, label, and an optional trend message.
 */
const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  _color = '#1e40af',
  _bgColor = '#eff6ff',
  trend,
  trendPositive = true,
}) => {
  return (
    <Box
      sx={{
        bgcolor: '#121722',
        borderRadius: 3.5,
        p: 2.5,
        border: '1px solid rgba(245, 158, 11, 0.18)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: '#f59e0b',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(245, 158, 11, 0.25)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: '#d97706',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#f8fafc',
              lineHeight: 1.1,
              mt: 0.5,
              fontSize: { xs: '1.75rem', sm: '2rem' },
            }}
          >
            {value}
          </Typography>
          {subtitle && (
            <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.78rem' }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: 'rgba(245, 158, 11, 0.12)',
            color: '#fbbf24',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 2.5,
          }}
        >
          {icon}
        </Avatar>
      </Box>

      {trend && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {trendPositive ? (
            <TrendingUpIcon sx={{ fontSize: 16, color: '#fbbf24' }} />
          ) : (
            <TrendingDownIcon sx={{ fontSize: 16, color: '#ef4444' }} />
          )}
          <Typography
            variant="caption"
            sx={{
              color: trendPositive ? '#fbbf24' : '#ef4444',
              fontWeight: 600,
              fontSize: '0.78rem',
            }}
          >
            {trend}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default StatCard;
