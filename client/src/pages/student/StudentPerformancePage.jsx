import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DashboardLayout from '../../layouts/DashboardLayout.jsx';
import SubjectPerformanceCard from '../../components/dashboard/SubjectPerformanceCard.jsx';

const StudentPerformancePage = () => (
  <DashboardLayout title="Academic Performance">
    <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <BarChartOutlinedIcon sx={{ color: '#fbbf24', fontSize: 28 }} />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#f8fafc' }}>Academic Performance</Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>Subject marks and grade overview</Typography>
        </Box>
        <Chip label="DEMO DATA" size="small" sx={{ ml: 'auto', bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }} />
      </Box>
      <SubjectPerformanceCard />
    </Box>
  </DashboardLayout>
);

export default StudentPerformancePage;
