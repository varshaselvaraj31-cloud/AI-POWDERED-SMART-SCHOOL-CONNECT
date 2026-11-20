import React from 'react';
import { Box, Typography, Grid, Chip, LinearProgress } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DashboardLayout from '../../layouts/DashboardLayout.jsx';
import AttendanceSummaryCard from '../../components/dashboard/AttendanceSummaryCard.jsx';
import { DEMO_STATS } from '../../data/studentDemo.js';

const StudentAttendancePage = () => {
  return (
    <DashboardLayout title="My Attendance">
      <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 1200, mx: 'auto' }}>

        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <EventAvailableIcon sx={{ color: '#1e40af', fontSize: 28 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>My Attendance</Typography>
            <Typography variant="caption" sx={{ color: '#94a3b8' }}>Academic Year 2026–27 · Monthly breakdown</Typography>
          </Box>
          <Chip label="DEMO DATA" size="small" sx={{ ml: 'auto', bgcolor: '#fef3c7', color: '#d97706', fontWeight: 700, fontSize: '0.65rem' }} />
        </Box>

        <Grid container spacing={2.5}>
          {/* Overview Cards */}
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ bgcolor: '#121722', borderRadius: 3.5, p: 2.5, textAlign: 'center', border: '1px solid rgba(245, 158, 11, 0.3)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#fbbf24' }}>{DEMO_STATS.attendance.percentage}%</Typography>
              <Typography variant="caption" sx={{ color: '#d97706', fontWeight: 700 }}>Overall Attendance</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ bgcolor: '#121722', borderRadius: 3.5, p: 2.5, textAlign: 'center', border: '1px solid rgba(245, 158, 11, 0.18)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#f8fafc' }}>{DEMO_STATS.attendance.present}</Typography>
              <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>Present Days</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ bgcolor: '#121722', borderRadius: 3.5, p: 2.5, textAlign: 'center', border: '1px solid rgba(245, 158, 11, 0.18)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#ef4444' }}>{DEMO_STATS.attendance.absent}</Typography>
              <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>Absent Days</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ bgcolor: '#121722', borderRadius: 3.5, p: 2.5, textAlign: 'center', border: '1px solid rgba(245, 158, 11, 0.18)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#f8fafc' }}>{DEMO_STATS.attendance.total}</Typography>
              <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>Total Days</Typography>
            </Box>
          </Grid>

          {/* Monthly Summary Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <AttendanceSummaryCard />
          </Grid>

          {/* Subject-wise placeholder */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ bgcolor: '#121722', borderRadius: 3.5, border: '1px solid rgba(245, 158, 11, 0.18)', p: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#f8fafc', mb: 2 }}>Subject-wise Attendance</Typography>
              {[
                { subject: 'Physics', pct: 85, color: '#fbbf24' },
                { subject: 'Chemistry', pct: 90, color: '#f59e0b' },
                { subject: 'Mathematics', pct: 95, color: '#d97706' },
                { subject: 'Biology', pct: 80, color: '#eab308' },
                { subject: 'English', pct: 88, color: '#fbbf24' },
                { subject: 'Computer Sc.', pct: 93, color: '#f59e0b' },
              ].map((item) => (
                <Box key={item.subject} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#f8fafc' }}>{item.subject}</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: item.color }}>{item.pct}%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={item.pct} sx={{ height: 7, borderRadius: 4, bgcolor: '#181f2e', '& .MuiLinearProgress-bar': { borderRadius: 4, bgcolor: item.color } }} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default StudentAttendancePage;
