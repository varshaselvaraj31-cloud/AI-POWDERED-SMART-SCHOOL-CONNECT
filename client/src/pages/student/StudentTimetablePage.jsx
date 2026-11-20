import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DashboardLayout from '../../layouts/DashboardLayout.jsx';
import TimetableCard from '../../components/dashboard/TimetableCard.jsx';

const StudentTimetablePage = () => (
  <DashboardLayout title="Timetable">
    <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <CalendarMonthOutlinedIcon sx={{ color: '#fbbf24', fontSize: 28 }} />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#f8fafc' }}>Weekly Timetable</Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>Class schedule – Academic Year 2026–27</Typography>
        </Box>
        <Chip label="DEMO DATA" size="small" sx={{ ml: 'auto', bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }} />
      </Box>
      <TimetableCard />
    </Box>
  </DashboardLayout>
);

export default StudentTimetablePage;
