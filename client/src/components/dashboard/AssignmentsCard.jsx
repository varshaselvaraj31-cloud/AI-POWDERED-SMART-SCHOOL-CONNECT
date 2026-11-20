import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import { DEMO_ASSIGNMENTS } from '../../data/studentDemo.js';

const STATUS_CONFIG = {
  pending: {
    label: 'Pending',
    color: '#fbbf24',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: '1px solid rgba(245, 158, 11, 0.25)',
    icon: <AssignmentOutlinedIcon sx={{ fontSize: 15 }} />,
  },
  submitted: {
    label: 'Submitted',
    color: '#34d399',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: '1px solid rgba(16, 185, 129, 0.25)',
    icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 15 }} />,
  },
  overdue: {
    label: 'Overdue',
    color: '#f87171',
    bg: 'rgba(239, 68, 68, 0.12)',
    border: '1px solid rgba(239, 68, 68, 0.25)',
    icon: <AssignmentLateOutlinedIcon sx={{ fontSize: 15 }} />,
  },
};

const PRIORITY_COLOR = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#10b981',
};

/**
 * AssignmentsCard – Shows a scrollable list of recent assignments with
 * status badges and due dates. All data is demo data only.
 */
const AssignmentsCard = ({ limit = 5 }) => {
  const displayedAssignments = DEMO_ASSIGNMENTS.slice(0, limit);

  const formatDueDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Box
      sx={{
        bgcolor: '#121722',
        borderRadius: 3.5,
        border: '1px solid rgba(245, 158, 11, 0.18)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        height: '100%',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(245, 158, 11, 0.12)',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#f8fafc' }}>
          Recent Assignments
        </Typography>
        <Chip
          label="DEMO DATA"
          size="small"
          sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }}
        />
      </Box>

      {/* Assignment List */}
      <Stack divider={<Box sx={{ borderTop: '1px solid rgba(245, 158, 11, 0.08)' }} />}>
        {displayedAssignments.map((assignment) => {
          const statusCfg = STATUS_CONFIG[assignment.status];
          return (
            <Box
              key={assignment.id}
              sx={{
                px: 3,
                py: 1.75,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                '&:hover': { bgcolor: 'rgba(245, 158, 11, 0.05)' },
                cursor: 'default',
              }}
            >
              {/* Priority Dot */}
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: PRIORITY_COLOR[assignment.priority],
                  flexShrink: 0,
                }}
              />

              {/* Title + Subject */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: '#f8fafc',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {assignment.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#d97706', fontWeight: 600 }}>
                  {assignment.subject}
                </Typography>
              </Box>

              {/* Due Date */}
              <Typography variant="caption" sx={{ color: '#94a3b8', flexShrink: 0 }}>
                Due {formatDueDate(assignment.dueDate)}
              </Typography>

              {/* Status Badge */}
              <Chip
                icon={statusCfg.icon}
                label={statusCfg.label}
                size="small"
                sx={{
                  bgcolor: statusCfg.bg,
                  color: statusCfg.color,
                  border: statusCfg.border,
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  height: 22,
                  flexShrink: 0,
                  '& .MuiChip-icon': { color: statusCfg.color, fontSize: '14px !important' },
                }}
              />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default AssignmentsCard;
