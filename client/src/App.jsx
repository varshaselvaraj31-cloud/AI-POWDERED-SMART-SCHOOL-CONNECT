import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme.js';

// Auth Pages
import LoginPage from './pages/auth/LoginPage.jsx';
import StudentRegisterPage from './pages/auth/StudentRegisterPage.jsx';
import TeacherRegisterPage from './pages/auth/TeacherRegisterPage.jsx';
import ParentRegisterPage from './pages/auth/ParentRegisterPage.jsx';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.jsx';
import RegisterHubPage from './pages/auth/RegisterHubPage.jsx';

// Student Dashboard Pages
import StudentDashboardPage from './pages/student/StudentDashboardPage.jsx';
import StudentAttendancePage from './pages/student/StudentAttendancePage.jsx';
import StudentAssignmentsPage from './pages/student/StudentAssignmentsPage.jsx';
import StudentTimetablePage from './pages/student/StudentTimetablePage.jsx';
import StudentPerformancePage from './pages/student/StudentPerformancePage.jsx';
import StudentAnnouncementsPage from './pages/student/StudentAnnouncementsPage.jsx';
import StudentProfilePage from './pages/student/StudentProfilePage.jsx';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Default Root redirects to Login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterHubPage />} />
          <Route path="/register/student" element={<StudentRegisterPage />} />
          <Route path="/register/teacher" element={<TeacherRegisterPage />} />
          <Route path="/register/parent" element={<ParentRegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Student Dashboard Routes */}
          <Route path="/student/dashboard" element={<StudentDashboardPage />} />
          <Route path="/student/attendance" element={<StudentAttendancePage />} />
          <Route path="/student/assignments" element={<StudentAssignmentsPage />} />
          <Route path="/student/timetable" element={<StudentTimetablePage />} />
          <Route path="/student/performance" element={<StudentPerformancePage />} />
          <Route path="/student/announcements" element={<StudentAnnouncementsPage />} />
          <Route path="/student/profile" element={<StudentProfilePage />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
