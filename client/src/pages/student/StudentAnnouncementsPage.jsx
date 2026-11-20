import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import DashboardLayout from '../../layouts/DashboardLayout.jsx';
import AnnouncementsCard from '../../components/dashboard/AnnouncementsCard.jsx';

const StudentAnnouncementsPage = () => (
  <DashboardLayout title="Announcements">
    <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <CampaignOutlinedIcon sx={{ color: '#fbbf24', fontSize: 28 }} />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#f8fafc' }}>School Announcements</Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>Important notices from administration and departments</Typography>
        </Box>
        <Chip label="DEMO DATA" size="small" sx={{ ml: 'auto', bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }} />
      </Box>
      <AnnouncementsCard />
    </Box>
  </DashboardLayout>
);

export default StudentAnnouncementsPage;
