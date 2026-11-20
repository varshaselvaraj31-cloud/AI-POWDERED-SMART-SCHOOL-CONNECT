import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate, useLocation } from 'react-router-dom';

const ROLE_PATHS = {
  student: '/register/student',
  teacher: '/register/teacher',
  parent: '/register/parent',
};

export const RoleTabs = ({ activeRole = 'student' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentValue = () => {
    if (location.pathname.includes('/register/student')) return 'student';
    if (location.pathname.includes('/register/teacher')) return 'teacher';
    if (location.pathname.includes('/register/parent')) return 'parent';
    return activeRole;
  };

  const handleTabChange = (event, newValue) => {
    navigate(ROLE_PATHS[newValue]);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#181f2e',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        borderRadius: 3,
        p: 0.6,
        mb: 3,
      }}
    >
      <Tabs
        value={getCurrentValue()}
        onChange={handleTabChange}
        variant="fullWidth"
        sx={{
          minHeight: 44,
          '& .MuiTabs-indicator': {
            backgroundColor: '#f59e0b',
            height: 3,
            borderRadius: '3px 3px 0 0',
          },
        }}
      >
        <Tab
          value="student"
          icon={<SchoolIcon sx={{ fontSize: 20 }} />}
          iconPosition="start"
          label="Student"
          sx={{
            minHeight: 44,
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'none',
            borderRadius: 2.5,
            color: '#94a3b8',
            '&.Mui-selected': {
              color: '#000000',
              background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
              boxShadow: '0 2px 10px rgba(245, 158, 11, 0.4)',
            },
          }}
        />
        <Tab
          value="teacher"
          icon={<MenuBookIcon sx={{ fontSize: 20 }} />}
          iconPosition="start"
          label="Teacher"
          sx={{
            minHeight: 44,
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'none',
            borderRadius: 2.5,
            color: '#94a3b8',
            '&.Mui-selected': {
              color: '#000000',
              background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
              boxShadow: '0 2px 10px rgba(245, 158, 11, 0.4)',
            },
          }}
        />
        <Tab
          value="parent"
          icon={<FamilyRestroomIcon sx={{ fontSize: 20 }} />}
          iconPosition="start"
          label="Parent"
          sx={{
            minHeight: 44,
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'none',
            borderRadius: 2.5,
            color: '#94a3b8',
            '&.Mui-selected': {
              color: '#000000',
              background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
              boxShadow: '0 2px 10px rgba(245, 158, 11, 0.4)',
            },
          }}
        />
      </Tabs>
    </Box>
  );
};

export default RoleTabs;
