import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  Divider,
  Stack,
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AuthLayout from '../../layouts/AuthLayout.jsx';
import FormInput from '../../components/common/FormInput.jsx';
import AuthButton from '../../components/common/AuthButton.jsx';
import AlertBanner from '../../components/common/AlertBanner.jsx';
import authService from '../../services/auth.service.js';

export const LoginPage = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    identifier: '', // Email or School Username
    password: '',
    rememberMe: false,
  });

  // Validation & Feedback State
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear individual field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Please enter your registered school email or username.';
    } else if (
      formData.identifier.includes('@') &&
      !/^\S+@\S+\.\S+$/.test(formData.identifier)
    ) {
      newErrors.identifier = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required to proceed.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    setServerSuccess('');

    if (!validate()) return;

    setLoading(true);
    try {
      // Connect to real auth endpoint
      const response = await authService.login({
        email: formData.identifier,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      setServerSuccess('Login successful! Redirecting to your dashboard...');
      // If token provided by backend, persist session
      if (response?.data?.token) {
        localStorage.setItem('school_token', response.data.token);
        localStorage.setItem('school_user', JSON.stringify(response.data.user || {}));
      }

      // Navigate to home/dashboard
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (err) {
      setServerError(
        err.message || 'Authentication failed. Please verify your credentials or server status.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your AI-Powered Smart School Connect account"
      badgeText="Secure Portal Sign In"
    >
      {/* Alert Messaging */}
      <AlertBanner
        severity="error"
        message={serverError}
        onClose={() => setServerError('')}
      />
      <AlertBanner
        severity="success"
        message={serverSuccess}
        onClose={() => setServerSuccess('')}
      />

      <Box component="form" onSubmit={handleSubmit} noValidate>
        {/* Email or Username */}
        <FormInput
          label="School Email or Username"
          name="identifier"
          type="text"
          value={formData.identifier}
          onChange={handleChange}
          placeholder="e.g. alex.student@school.edu or student123"
          error={errors.identifier}
          required
          autoComplete="username"
          startIcon={<EmailOutlinedIcon fontSize="small" />}
        />

        {/* Password */}
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your confidential password"
          error={errors.password}
          required
          autoComplete="current-password"
          startIcon={<LockOutlinedIcon fontSize="small" />}
        />

        {/* Remember Me & Forgot Password */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            mb: 3,
            mt: -0.5,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                size="small"
                color="primary"
              />
            }
            label={
              <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                Remember this device
              </Typography>
            }
          />

          <MuiLink
            component={Link}
            to="/forgot-password"
            variant="body2"
            sx={{
              color: '#fbbf24',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.875rem',
              '&:hover': { textDecoration: 'underline', color: '#f59e0b' },
            }}
          >
            Forgot password?
          </MuiLink>
        </Box>

        {/* Submit Login CTA */}
        <AuthButton
          type="submit"
          loading={loading}
          endIcon={<ArrowForwardIcon />}
          sx={{ py: 1.5, fontSize: '1rem', mb: 3 }}
        >
          Sign In to Portal
        </AuthButton>

        {/* Register Navigation Options */}
        <Divider sx={{ my: 2, borderColor: 'rgba(245, 158, 11, 0.2)' }}>
          <Typography variant="caption" sx={{ color: '#d97706', px: 1, fontWeight: 700, letterSpacing: '0.05em' }}>
            NEW TO SMART SCHOOL CONNECT?
          </Typography>
        </Divider>

        <Typography variant="body2" sx={{ textAlign: 'center', color: '#94a3b8', mb: 2 }}>
          Select your institutional role to create an account:
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button
            component={Link}
            to="/register/student"
            variant="outlined"
            size="small"
            fullWidth
            startIcon={<SchoolOutlinedIcon fontSize="small" />}
            sx={{
              py: 1,
              borderColor: 'rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              fontWeight: 700,
              '&:hover': { borderColor: '#fbbf24', bgcolor: 'rgba(245, 158, 11, 0.1)' },
            }}
          >
            Student
          </Button>

          <Button
            component={Link}
            to="/register/teacher"
            variant="outlined"
            size="small"
            fullWidth
            startIcon={<MenuBookOutlinedIcon fontSize="small" />}
            sx={{
              py: 1,
              borderColor: 'rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              fontWeight: 700,
              '&:hover': { borderColor: '#fbbf24', bgcolor: 'rgba(245, 158, 11, 0.1)' },
            }}
          >
            Teacher
          </Button>

          <Button
            component={Link}
            to="/register/parent"
            variant="outlined"
            size="small"
            fullWidth
            startIcon={<FamilyRestroomOutlinedIcon fontSize="small" />}
            sx={{
              py: 1,
              borderColor: 'rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              fontWeight: 700,
              '&:hover': { borderColor: '#fbbf24', bgcolor: 'rgba(245, 158, 11, 0.1)' },
            }}
          >
            Parent
          </Button>
        </Stack>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
