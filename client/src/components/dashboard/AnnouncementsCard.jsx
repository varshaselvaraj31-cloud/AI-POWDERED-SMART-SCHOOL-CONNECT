import React, { useState } from 'react';
import { Box, Typography, Chip, Stack, Collapse, IconButton } from '@mui/material';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DEMO_ANNOUNCEMENTS } from '../../data/studentDemo.js';

const CATEGORY_CONFIG = {
  Exam: { color: '#f87171', bg: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)' },
  Event: { color: '#fbbf24', bg: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)' },
  General: { color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.12)', border: '1px solid rgba(148, 163, 184, 0.25)' },
  Sports: { color: '#34d399', bg: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)' },
};

/**
 * AnnouncementsCard – Displays recent school announcements in an expandable list.
 * Data is demo/sample only.
 */
const AnnouncementsCard = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CampaignOutlinedIcon sx={{ fontSize: 20, color: '#fbbf24' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#f8fafc' }}>
            School Announcements
          </Typography>
        </Box>
        <Chip
          label="DEMO DATA"
          size="small"
          sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 800, fontSize: '0.65rem' }}
        />
      </Box>

      {/* Announcements */}
      <Stack divider={<Box sx={{ borderTop: '1px solid rgba(245, 158, 11, 0.08)', mx: 3 }} />}>
        {DEMO_ANNOUNCEMENTS.map((item) => {
          const catCfg = CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG['General'];
          const isExpanded = expandedId === item.id;

          return (
            <Box key={item.id} sx={{ px: 3, py: 2 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, cursor: 'pointer' }}
                onClick={() => toggleExpand(item.id)}
              >
                {/* Category Dot */}
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: catCfg.color,
                    mt: 0.6,
                    flexShrink: 0,
                  }}
                />

                {/* Content */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: '#f8fafc', lineHeight: 1.3 }}
                    >
                      {item.title}
                    </Typography>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        bgcolor: catCfg.bg,
                        color: catCfg.color,
                        border: catCfg.border,
                        fontWeight: 700,
                        fontSize: '0.65rem',
                        height: 18,
                      }}
                    />
                  </Box>

                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    {item.author} · {formatDate(item.date)}
                  </Typography>

                  <Collapse in={isExpanded}>
                    <Typography
                      variant="body2"
                      sx={{ color: '#cbd5e1', mt: 1, lineHeight: 1.6, fontSize: '0.875rem' }}
                    >
                      {item.body}
                    </Typography>
                  </Collapse>
                </Box>

                {/* Expand toggle */}
                <IconButton size="small" sx={{ color: '#94a3b8', flexShrink: 0 }}>
                  {isExpanded ? (
                    <ExpandLessIcon fontSize="small" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" />
                  )}
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default AnnouncementsCard;
