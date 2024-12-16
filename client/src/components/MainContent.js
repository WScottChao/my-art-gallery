import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

// Search Bar Component
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <FormControl sx={{ width: { xs: '100%', sm: '300px' } }} variant="outlined">
      <OutlinedInput
        size="small"
        placeholder="Search…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [category, setCategory] = useState('All');

  const [userCollection, setUserCollection] = useState(new Set());

  const { authState } = useContext(AuthContext);

  const navigate = useNavigate();

  const satoken = localStorage.getItem('token');

  useEffect(() => {
    fetchArtworks();
    fetchUserCollection();
  }, []);

  // Function to handle card click (navigate to details page)
  const handleCardClick = (artId) => {
    navigate(`/art/${artId}`); // Pass the artwork ID to the details page
  };

  // Fetch artworks from the Met API
  const fetchArtworks = async () => {
    try {
      const response = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects'
      );
      const objectIDs = response.data.objectIDs.slice(0, 12); // Fetch only 12 items
      const artworkData = await Promise.all(
        objectIDs.map(async (id) => {
          const res = await axios.get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          return {
            id, // Include the artwork ID for navigation
            img: res.data.primaryImageSmall || 'https://via.placeholder.com/400x300',
            title: res.data.title || 'Untitled',
            description: res.data.medium || 'No description available',
            category: res.data.department || 'Unknown',
          };
        })
      );
      setArtworks(artworkData);
      setFilteredArtworks(artworkData);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  // Fetch user's liked art pieces
  const fetchUserCollection = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8083/api/goview/object/getlike',
        {
          headers: { Authorization: `Bearer ${satoken}` },
        }
      );
      const likedArtIDs = new Set(response.data.map((art) => art.id));
      setUserCollection(likedArtIDs);
    } catch (error) {
      console.error('Error fetching user collection:', error);
    }
  };

  // Filter artworks based on category
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredArtworks(artworks);
    } else {
      const filtered = artworks.filter(
        (art) => art.category === selectedCategory
      );
      setFilteredArtworks(filtered);
    }
  };

  // Search functionality
  const handleSearch = (searchTerm) => {
    const filtered = artworks.filter((art) =>
      art.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  // Function to add an artwork to the collection
  const handleAddToCollection = async (event, artId) => {
    event.stopPropagation();
    
    // Check if the user is logged in
    if (!authState?.token) {
      alert('You need to login or sign up to collect this art piece.');
      return; // Stop the process if not logged in
    }

    try {
      const response = await axios.post(
        'http://localhost:8083/api/goview/object/like',
        { id: artId }, // Send the artwork ID
        {
          headers: { Authorization: `Bearer ${authState.token}` }, // Send token in header
        }
      );
      if (response.status === 200) {
        alert('Added to your collection!');
        setUserCollection((prev) => new Set(prev).add(artId)); // Update the user collection
      }
    } catch (error) {
      console.error('Error adding to collection:', error);
      alert('Failed to add artwork to collection.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Title Section */}
      <Box textAlign="center">
        <Typography variant="h2">My Art Gallery</Typography>
        <Typography variant="subtitle1">Explore your favorite art</Typography>
      </Box>

      {/* Search Bar and Categories */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Categories */}
        <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
          {['All', 'European Paintings', 'Sculpture', 'Modern Art', 'Drawings'].map(
            (cat) => (
              <Chip
                key={cat}
                label={cat}
                variant={category === cat ? 'filled' : 'outlined'}
                onClick={() => handleCategoryClick(cat)}
              />
            )
          )}
        </Box>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
      </Box>

      {/* Art Pieces Grid */}
      <Grid container spacing={3}>
        {filteredArtworks.map((artwork) => (
          <Grid item xs={12} sm={6} md={4} key={artwork.id}>
            <StyledCard onClick={() => handleCardClick(artwork.id)}> {/* Card Click */}
              <Box sx={{ position: 'relative' }}>
                {/* Artwork Image */}
                <CardMedia
                  component="img"
                  image={artwork.img}
                  alt={artwork.title}
                  sx={{ height: 200, objectFit: 'cover' }}
                />

                {/* Like Button */}
                <StyledCardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1">{artwork.title}</Typography>
                    {/* Star Icon Button */}
                    <IconButton
                      color={userCollection.has(artwork.id) ? 'warning' : 'default'}
                      onClick={(event) => handleAddToCollection(event, artwork.id)} // Pass event
                    >
                      {userCollection.has(artwork.id) ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {artwork.description}
                  </Typography>
                </StyledCardContent>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
