import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
  placeholder,
  startIcon,
  required = false,
  disabled = false,
  autoComplete,
  ...rest
}) => {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <Box sx={{ mb: 2.2, width: '100%', textAlign: 'left' }}>
      {label && (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            mb: 0.75,
            color: error ? '#ef4444' : '#f8fafc',
            fontSize: '0.875rem',
          }}
        >
          {label} {required && <Box component="span" sx={{ color: '#ef4444' }}>*</Box>}
        </Typography>
      )}

      <TextField
        fullWidth
        name={name}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        error={Boolean(error)}
        helperText={error || helperText}
        autoComplete={autoComplete}
        slotProps={{
          input: {
            startAdornment: startIcon ? (
              <InputAdornment position="start" sx={{ color: error ? '#ef4444' : '#94a3b8' }}>
                {startIcon}
              </InputAdornment>
            ) : null,
            endAdornment: isPassword ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                  size="small"
                  sx={{ color: '#94a3b8' }}
                >
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
        {...rest}
      />
    </Box>
  );
};

export default FormInput;
