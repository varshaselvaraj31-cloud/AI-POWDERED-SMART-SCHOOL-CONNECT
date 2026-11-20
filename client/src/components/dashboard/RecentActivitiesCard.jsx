import React from 'react';
import { Box, Typography, Chip, Stack, Avatar } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { DEMO_ACTIVITIES } from '../../data/studentDemo.js';

const ICON_MAP = {
  assignment: { icon: <AssignmentOutlinedIcon fontSize="small" />, color: '#fbbf24', bg: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)' },
  attendance: { icon: <EventAvailableOutlinedIcon fontSize="small" />, color: '#34d399', bg: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)' },
  result: { icon: <GradeOutlinedIcon fontSize="small" />, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)' },
  announcement: { icon: <CampaignOutlinedIcon fontSize="small" />, color: '#d97706', bg: 'rgba(217, 119, 6, 0.12)', border: '1px solid rgba(217, 119, 6, 0.3)' },
  overdue: { icon: <WarningAmberOutlinedIcon fontSize="small" />, color: '#f87171', bg: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)' },
};

/**
 * RecentActivitiesCard – Shows a timeline of recent student activity events.
 * All entries are demo/sample data only.
 */
const RecentActivitiesCard = () => {
  return (
    <Box
      sx={{
        bgcolor: '#121722',
        borderRadius: 3.5,
        border: '1px solid rgba(245, 158, 11, 0.18)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        height: '100%',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(245, 158, 11, 0.12)',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#f8fafc' }}>
          Recent Activity
        </Typography>
        <Chip
          label="DEMO DATA"
          size="small"
          sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }}
        />
      </Box>

      {/* Timeline */}
      <Box sx={{ px: 3, py: 2 }}>
        <Stack spacing={0}>
          {DEMO_ACTIVITIES.map((activity, index) => {
            const cfg = ICON_MAP[activity.icon] || ICON_MAP['assignment'];
            const isLast = index === DEMO_ACTIVITIES.length - 1;

            return (
              <Box key={activity.id} sx={{ display: 'flex', gap: 2 }}>
                {/* Timeline Line + Icon */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5 }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: cfg.bg,
                      color: cfg.color,
                      border: cfg.border,
                      flexShrink: 0,
                    }}
                  >
                    {cfg.icon}
                  </Avatar>
                  {!isLast && (
                    <Box
                      sx={{
                        width: 2,
                        flex: 1,
                        minHeight: 24,
                        bgcolor: 'rgba(245, 158, 11, 0.15)',
                        my: 0.5,
                      }}
                    />
                  )}
                </Box>

                {/* Text */}
                <Box sx={{ pb: isLast ? 0 : 2, pt: 0.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#f8fafc', lineHeight: 1.3 }}>
                    {activity.action}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    {activity.detail}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: 'block', color: '#94a3b8', mt: 0.25, fontSize: '0.72rem' }}
                  >
                    {activity.time}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default RecentActivitiesCard;
