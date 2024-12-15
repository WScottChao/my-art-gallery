import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

// Example Data for Cards
const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Discover how these tools streamline workflows and boost productivity.',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  // Add other card data entries as required...
];

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  flexGrow: 1,
}));

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2, // Show only two lines
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const Search = () => (
  <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
    <OutlinedInput
      size="small"
      placeholder="Search…"
      startAdornment={
        <InputAdornment position="start">
          <SearchRoundedIcon fontSize="small" />
        </InputAdornment>
      }
      inputProps={{
        'aria-label': 'search',
      }}
    />
  </FormControl>
);

const Author = ({ authors }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <AvatarGroup max={3}>
        {authors.map((author, index) => (
          <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
        ))}
      </AvatarGroup>
      <Typography variant="caption">{authors.map((a) => a.name).join(', ')}</Typography>
    </Box>
    <Typography variant="caption">July 14, 2021</Typography>
  </Box>
);

export default function MainContent() {
  const handleClick = () => console.info('Chip clicked');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header */}
      <Box>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1">
          Stay in the loop with the latest about our products.
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>

      {/* Filters and Search (Desktop) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {/* Category Chips */}
        <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
          <Chip label="All categories" onClick={handleClick} />
          <Chip label="Engineering" onClick={handleClick} />
          <Chip label="Product" onClick={handleClick} />
          <Chip label="Design" onClick={handleClick} />
        </Box>

        {/* Search Bar (Desktop) */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Cards */}
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{ aspectRatio: '16 / 9' }}
              />
              <StyledCardContent>
                <Typography variant="caption">{card.tag}</Typography>
                <Typography variant="h6">{card.title}</Typography>
                <StyledTypography variant="body2" color="text.secondary">
                  {card.description}
                </StyledTypography>
              </StyledCardContent>
              <Author authors={card.authors} />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
