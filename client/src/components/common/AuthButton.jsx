import React from 'react';
import { Button, CircularProgress } from '@mui/material';

export const AuthButton = ({
  children,
  loading = false,
  disabled = false,
  fullWidth = true,
  type = 'submit',
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
  onClick,
  sx = {},
  ...rest
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      sx={{
        py: 1.4,
        fontSize: '0.975rem',
        fontWeight: 600,
        textTransform: 'none',
        borderRadius: 2,
        letterSpacing: '0.01em',
        boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
        ...sx,
      }}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: variant === 'contained' ? '#000000' : '#fbbf24' }} />
      ) : (
        children
      )}
    </Button>
  );
};

export default AuthButton;
