import React from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DEMO_SUBJECTS } from '../../data/studentDemo.js';

/**
 * SubjectPerformanceCard – Shows a table of all subjects with marks, grades,
 * and a visual progress bar for each. Uses demo data only.
 */
const SubjectPerformanceCard = () => {
  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return '#10b981';
    if (grade.startsWith('B')) return '#fbbf24';
    if (grade.startsWith('C')) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <Box
      sx={{
        bgcolor: '#121722',
        borderRadius: 3.5,
        border: '1px solid rgba(245, 158, 11, 0.18)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      }}
    >
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
          Academic Performance
        </Typography>
        <Chip
          label="DEMO DATA"
          size="small"
          sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }}
        />
      </Box>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: '#181f2e' }}>
              <TableCell sx={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.8rem', borderBottom: '1px solid rgba(245, 158, 11, 0.15)' }}>Subject</TableCell>
              <TableCell sx={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.8rem', borderBottom: '1px solid rgba(245, 158, 11, 0.15)' }}>Teacher</TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.8rem', borderBottom: '1px solid rgba(245, 158, 11, 0.15)' }}>Marks</TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.8rem', borderBottom: '1px solid rgba(245, 158, 11, 0.15)' }}>Grade</TableCell>
              <TableCell sx={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.8rem', minWidth: 100, borderBottom: '1px solid rgba(245, 158, 11, 0.15)' }}>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DEMO_SUBJECTS.map((row) => (
              <TableRow
                key={row.subject}
                sx={{
                  borderBottom: '1px solid rgba(245, 158, 11, 0.08)',
                  '&:last-child td': { border: 0 },
                  '&:hover': { bgcolor: 'rgba(245, 158, 11, 0.05)' },
                }}
              >
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#f8fafc' }}>
                    {row.subject}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                    {row.teacher}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#f8fafc' }}>
                    {row.marks}/{row.maxMarks}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={row.grade}
                    size="small"
                    sx={{
                      bgcolor: `${getGradeColor(row.grade)}18`,
                      color: getGradeColor(row.grade),
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      height: 22,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={(row.marks / row.maxMarks) * 100}
                      sx={{
                        flex: 1,
                        height: 6,
                        borderRadius: 3,
                        bgcolor: '#181f2e',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 3,
                          bgcolor: getGradeColor(row.grade),
                        },
                      }}
                    />
                    <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.72rem', minWidth: 28 }}>
                      {row.marks}%
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SubjectPerformanceCard;
