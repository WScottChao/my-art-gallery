// src/components/CardItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}));

export default function CardItem({
  id,
  img,
  title,
  description,
  isCollected,
  onAddToCollection,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (id) {
      navigate(`/art/${id}`);
    }
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    onAddToCollection(id);
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardMedia
        component="img"
        image={img || 'https://via.placeholder.com/400x300'}
        alt={title || 'Untitled'}
        sx={{ height: 200, objectFit: 'cover' }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
        }}
      >
        <IconButton
          color={isCollected ? 'warning' : 'default'}
          onClick={handleStarClick}
        >
          {isCollected ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Box>

      <StyledCardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description || 'No description available'}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}