import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import SearchBar from './SearchBar';
import CardItem from '../components/CardItem';

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

export default function MainContent() {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [userCollection, setUserCollection] = useState(new Set());
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const satoken = authState?.token || localStorage.getItem('token');

  useEffect(() => {
    fetchArtworks();
    fetchUserCollection();
  }, []);

  // Fetch artworks from the Met API
  const fetchArtworks = async () => {
    const cachedArtworks = localStorage.getItem('artworks');

    if (cachedArtworks) {
      const parsedArtworks = JSON.parse(cachedArtworks);
      setArtworks(parsedArtworks); // Load cached data
      setFilteredArtworks(parsedArtworks);
      return;
    }

    try {
      const response = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects'
      );
      const objectIDs = response.data.objectIDs
        .sort(() => Math.random() - 0.5) // Randomize the order
        .slice(0, 90); // Fetch 36 random objects

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
      localStorage.setItem('artworks', JSON.stringify(artworkData));
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  // Handle recommendation section
  const fetchRecommendations = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8083/api/goview/object/recommend?page=${page}&limit=${itemsPerPage}`,
        {
          headers: { Authorization: `Bearer ${satoken}` },
        }
      );
      const recommendedData = response.data.map((item) => ({
        id: item.objectID,
        img: item.primaryImageSmall || 'https://via.placeholder.com/400x300',
        title: item.title || 'Untitled',
        description: item.medium || 'No description available',
      }));
      setFilteredArtworks(recommendedData);
      setCurrentPage(page); // Update the current page
      setCategory('Recommend to You'); // Set the current category
    } catch (error) {
      console.error('Error fetching recommendations:', error);
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

  // Add or remove from collection
  const handleAddToCollection = async (event, artId) => {
    event.stopPropagation();
    
    if (!satoken) {
      alert('You need to login or sign up to collect this art piece.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8083/api/goview/object/like',
        { id: artId },
        { headers: { Authorization: `Bearer ${satoken}` } }
      );
      if (response.status === 200) {
        alert('Added to your collection!');
        setUserCollection((prev) => new Set(prev).add(artId));
      }
    } catch (error) {
      console.error('Error adding to collection:', error);
      alert('Failed to add artwork to collection.');
    }
  };

  // Handle category click
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredArtworks(artworks);
    } else if (selectedCategory === 'Recommend to You') {
      fetchRecommendations();
    }
  };

  // Handle card click
  const handleCardClick = (artId) => {
    navigate(`/art/${artId}`);
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update the current page state
    if (category === 'Recommend to You') {
      fetchRecommendations(value); // Fetch recommendations for the new page
    }
  };

  // Calculate artworks to display on the current page
  const displayedArtworks = filteredArtworks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );



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
          {['All', 'Recommend to You'].map((cat) => (
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
        <SearchBar />
      </Box>

      {/* Art Pieces Grid */}
      <Grid container spacing={3}>
        {displayedArtworks.map((artwork) => (
          <Grid item xs={12} sm={6} md={4} key={artwork.id}>
            <CardItem
              id={artwork.id}
              img={artwork.img}
              title={artwork.title}
              description={artwork.description}
              isCollected={userCollection.has(artwork.id)}
              onAddToCollection={handleAddToCollection}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
        <Pagination
          count={Math.ceil(artworks.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
        </Box>
    </Box>
  );
}
