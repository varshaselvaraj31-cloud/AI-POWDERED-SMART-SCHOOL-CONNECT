import React from 'react';
import { Alert, AlertTitle, Collapse, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const AlertBanner = ({
  severity = 'error',
  title,
  message,
  onClose,
  sx = {},
}) => {
  if (!message && !title) return null;

  return (
    <Box sx={{ mb: 2.5, width: '100%', textAlign: 'left', ...sx }}>
      <Collapse in={Boolean(message || title)}>
        <Alert
          severity={severity}
          variant="standard"
          action={
            onClose ? (
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={onClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            ) : null
          }
          sx={{
            borderRadius: 2.5,
            fontSize: '0.875rem',
            border: '1px solid',
            bgcolor:
              severity === 'error'
                ? 'rgba(239, 68, 68, 0.12)'
                : severity === 'success'
                ? 'rgba(16, 185, 129, 0.12)'
                : severity === 'warning'
                ? 'rgba(245, 158, 11, 0.12)'
                : 'rgba(245, 158, 11, 0.08)',
            borderColor:
              severity === 'error'
                ? 'rgba(239, 68, 68, 0.35)'
                : severity === 'success'
                ? 'rgba(16, 185, 129, 0.35)'
                : severity === 'warning'
                ? 'rgba(245, 158, 11, 0.35)'
                : 'rgba(245, 158, 11, 0.25)',
            color:
              severity === 'error'
                ? '#fca5a5'
                : severity === 'success'
                ? '#6ee7b7'
                : severity === 'warning'
                ? '#fbbf24'
                : '#f8fafc',
          }}
        >
          {title && <AlertTitle sx={{ fontWeight: 700, mb: 0.25 }}>{title}</AlertTitle>}
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default AlertBanner;
