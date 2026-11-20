import React, { useState } from 'react';
import {
  Box,
  Typography,
  Link as MuiLink,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

import AuthLayout from '../../layouts/AuthLayout.jsx';
import FormInput from '../../components/common/FormInput.jsx';
import AuthButton from '../../components/common/AuthButton.jsx';
import AlertBanner from '../../components/common/AlertBanner.jsx';
import authService from '../../services/auth.service.js';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
    if (serverError) setServerError('');
  };

  const validate = () => {
    if (!email.trim()) {
      setError('Email address is required.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please provide a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) return;

    setLoading(true);
    try {
      await authService.forgotPassword({ email });
      setIsSubmitted(true);
    } catch (err) {
      setServerError(
        err.message || 'Unable to request password reset. Please verify your email or contact school IT support.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Recover access to your Smart School Connect account"
      badgeText="Account Recovery"
    >
      <AlertBanner
        severity="error"
        message={serverError}
        onClose={() => setServerError('')}
      />

      {isSubmitted ? (
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Box
            sx={{
              display: 'inline-flex',
              p: 2,
              borderRadius: '50%',
              bgcolor: '#dbeafe',
              color: '#1e40af',
              mb: 2.5,
            }}
          >
            <MarkEmailReadOutlinedIcon sx={{ fontSize: 52 }} />
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
            Check Your Email
          </Typography>

          <Typography variant="body2" sx={{ color: '#475569', mb: 4, maxWidth: 420, mx: 'auto', lineHeight: 1.6 }}>
            We have dispatched password recovery instructions to{' '}
            <Box component="span" sx={{ fontWeight: 600, color: '#1e40af' }}>
              {email}
            </Box>
            . Please check your inbox (and spam folder) to set a new password.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <AuthButton
              fullWidth={false}
              variant="outlined"
              onClick={() => setIsSubmitted(false)}
              sx={{ px: 3 }}
            >
              Resend to another email
            </AuthButton>

            <AuthButton
              component={Link}
              to="/login"
              fullWidth={false}
              startIcon={<ArrowBackIcon />}
              sx={{ px: 3 }}
            >
              Back to Sign In
            </AuthButton>
          </Stack>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 3, textAlign: 'left' }}>
            Enter your institutional email address below. We'll send you a secure verification link to reset your password.
          </Typography>

          <FormInput
            label="Registered School Email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="e.g. yourname@smartschool.edu"
            error={error}
            required
            autoComplete="email"
            startIcon={<EmailOutlinedIcon fontSize="small" />}
          />

          <AuthButton
            type="submit"
            loading={loading}
            endIcon={<SendOutlinedIcon />}
            sx={{ py: 1.5, fontSize: '1rem', mb: 3 }}
          >
            Send Reset Link
          </AuthButton>

          <Box sx={{ textAlign: 'center' }}>
            <MuiLink
              component={Link}
              to="/login"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                color: '#1e40af',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <ArrowBackIcon fontSize="small" /> Back to Sign In
            </MuiLink>
          </Box>
        </Box>
      )}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
