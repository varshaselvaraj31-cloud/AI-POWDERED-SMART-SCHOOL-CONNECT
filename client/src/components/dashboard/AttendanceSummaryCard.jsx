import React from 'react';
import { Box, Typography, Chip, LinearProgress, Stack } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { DEMO_ATTENDANCE_SUMMARY } from '../../data/studentDemo.js';

/**
 * AttendanceSummaryCard – Displays monthly attendance data with percentage
 * bars for each month. All data is demo data only.
 */
const AttendanceSummaryCard = () => {
  const getBarColor = (pct) => {
    if (pct >= 85) return '#10b981';
    if (pct >= 70) return '#f59e0b';
    return '#ef4444';
  };

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
      {/* Card Header */}
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EventAvailableIcon sx={{ fontSize: 20, color: '#fbbf24' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#f8fafc' }}>
            Attendance Summary
          </Typography>
        </Box>
        <Chip
          label="DEMO DATA"
          size="small"
          sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }}
        />
      </Box>

      {/* Monthly Bars */}
      <Box sx={{ px: 3, py: 2.5 }}>
        <Stack spacing={2}>
          {DEMO_ATTENDANCE_SUMMARY.map((month) => (
            <Box key={month.month}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#f8fafc' }}>
                  {month.month}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    {month.present}P / {month.absent}A
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: getBarColor(month.percentage),
                      minWidth: 36,
                      textAlign: 'right',
                    }}
                  >
                    {month.percentage}%
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={month.percentage}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: '#181f2e',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    bgcolor: getBarColor(month.percentage),
                  },
                }}
              />
            </Box>
          ))}
        </Stack>

        {/* Legend */}
        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: '1px dashed rgba(245, 158, 11, 0.2)',
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: '≥ 85% — Good', color: '#10b981' },
            { label: '70–84% — Average', color: '#f59e0b' },
            { label: '< 70% — Low', color: '#ef4444' },
          ].map((item) => (
            <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: item.color,
                }}
              />
              <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.73rem' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AttendanceSummaryCard;
