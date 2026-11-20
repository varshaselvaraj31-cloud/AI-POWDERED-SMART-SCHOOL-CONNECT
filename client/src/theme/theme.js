import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f59e0b', // Radiant Rich Gold
      light: '#fbbf24', // Bright Gold
      dark: '#d97706', // Burnished Metallic Gold
      contrastText: '#000000', // Crisp black text on gold buttons
    },
    secondary: {
      main: '#eab308',
      light: '#fde047',
      dark: '#ca8a04',
      contrastText: '#000000',
    },
    accent: {
      main: '#f59e0b',
      light: '#fef3c7',
    },
    background: {
      default: '#0a0d14', // Deep Rich Onyx Black
      paper: '#121722', // Sleek Obsidian Surface
    },
    text: {
      primary: '#f8fafc', // Crisp Platinum White
      secondary: '#94a3b8', // Subtle Silver Slate
      disabled: '#64748b',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
    },
    divider: 'rgba(245, 158, 11, 0.15)', // Subtle gold divider
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#f8fafc',
    },
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#f8fafc',
    },
    h6: {
      fontWeight: 700,
      color: '#f8fafc',
    },
    subtitle1: {
      color: '#cbd5e1',
      fontSize: '0.975rem',
    },
    subtitle2: {
      color: '#94a3b8',
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.5,
      color: '#f8fafc',
    },
    body2: {
      color: '#cbd5e1',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 22px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 20px rgba(245, 158, 11, 0.35)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
          color: '#000000',
          fontWeight: 800,
          '&:hover': {
            background: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(245, 158, 11, 0.5)',
          color: '#fbbf24',
          '&:hover': {
            borderColor: '#fbbf24',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#181f2e',
          color: '#f8fafc',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(245, 158, 11, 0.25)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f59e0b',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fbbf24',
            borderWidth: '2px',
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#121722',
          border: '1px solid rgba(245, 158, 11, 0.18)',
          boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.7)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#121722',
          backgroundImage: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(245, 158, 11, 0.1)',
          color: '#f8fafc',
        },
        head: {
          backgroundColor: '#181f2e',
          color: '#fbbf24',
          fontWeight: 700,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
