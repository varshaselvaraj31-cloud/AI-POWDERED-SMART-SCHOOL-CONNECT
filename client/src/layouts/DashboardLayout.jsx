import React, { useState } from 'react';
import { Box } from '@mui/material';
import StudentSidebar, {
  SIDEBAR_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
} from '../components/navigation/StudentSidebar.jsx';
import DashboardTopBar from '../components/navigation/DashboardTopBar.jsx';

/**
 * DashboardLayout – Shell layout with Luxury Gold & Black styling.
 */
const DashboardLayout = ({ children, title = 'Dashboard' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#0a0d14' }}>
      {/* Sidebar */}
      <StudentSidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
      />

      {/* Top App Bar */}
      <DashboardTopBar
        onMobileMenuToggle={() => setMobileOpen(true)}
        sidebarWidth={sidebarWidth}
        title={title}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: `${sidebarWidth}px` },
          mt: '64px',
          transition: 'margin 0.25s ease',
          minHeight: 'calc(100vh - 64px)',
          overflow: 'auto',
          bgcolor: '#0a0d14',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
