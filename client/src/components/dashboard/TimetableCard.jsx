import React, { useState } from 'react';
import { Box, Typography, Chip, Tabs, Tab, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { DEMO_TIMETABLE, SUBJECT_COLORS } from '../../data/studentDemo.js';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

/**
 * TimetableCard – A tabbed weekly timetable showing each day's classes.
 * Uses demo data only. Active day is auto-selected based on current day of the week.
 */
const TimetableCard = () => {
  const getTodayIndex = () => {
    const day = new Date().getDay(); // 0=Sun, 1=Mon...5=Fri, 6=Sat
    if (day === 0 || day === 6) return 0; // Weekend → show Monday
    return day - 1; // Mon=0, Tue=1...Fri=4
  };

  const [selectedDay, setSelectedDay] = useState(getTodayIndex());
  const currentDayClasses = DEMO_TIMETABLE[DAYS[selectedDay]] || [];

  return (
    <Box
      sx={{
        bgcolor: '#121722',
        borderRadius: 3.5,
        border: '1px solid rgba(245, 158, 11, 0.18)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
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
          Weekly Timetable
        </Typography>
        <Chip
          label="DEMO DATA"
          size="small"
          sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }}
        />
      </Box>

      {/* Day Tabs */}
      <Box sx={{ borderBottom: '1px solid rgba(245, 158, 11, 0.12)', px: 1 }}>
        <Tabs
          value={selectedDay}
          onChange={(e, v) => setSelectedDay(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 44,
            '& .MuiTabs-indicator': { backgroundColor: '#f59e0b', height: 2 },
          }}
        >
          {DAYS.map((day, index) => (
            <Tab
              key={day}
              label={day.slice(0, 3)}
              value={index}
              sx={{
                minHeight: 44,
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'none',
                color: '#94a3b8',
                '&.Mui-selected': { color: '#fbbf24' },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Classes for Selected Day */}
      <Box sx={{ px: 3, py: 2 }}>
        <Stack spacing={1.5}>
          {currentDayClasses.map((cls, index) => {
            const subjectColor = SUBJECT_COLORS[cls.subject] || '#fbbf24';
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 1.5,
                  borderRadius: 2.5,
                  bgcolor: '#181f2e',
                  border: `1px solid ${subjectColor}35`,
                  borderLeft: `4px solid ${subjectColor}`,
                }}
              >
                {/* Time */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 80 }}>
                  <AccessTimeIcon sx={{ fontSize: 14, color: '#94a3b8' }} />
                  <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                    {cls.time}
                  </Typography>
                </Box>

                {/* Subject + Teacher */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: subjectColor, lineHeight: 1.2 }}
                  >
                    {cls.subject}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    {cls.teacher}
                  </Typography>
                </Box>

                {/* Room */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <RoomOutlinedIcon sx={{ fontSize: 14, color: '#94a3b8' }} />
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    {cls.room}
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

export default TimetableCard;
