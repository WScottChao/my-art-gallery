// src/components/MainContent.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import SearchBar from './SearchBar';
import CardItem from './CardItem';

export default function MainContent() {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [userCollection, setUserCollection] = useState(new Set());
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArtworks();
    fetchUserCollection();
  }, []);

  // Fetch artworks from the Met API
  const fetchArtworks = async () => {
    const cachedArtworks = localStorage.getItem('artworks');

    if (cachedArtworks) {
      const parsedArtworks = JSON.parse(cachedArtworks);
      setArtworks(parsedArtworks);
      setFilteredArtworks(parsedArtworks);
      return;
    }

    try {
      const response = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects'
      );
      const objectIDs = response.data.objectIDs
        .sort(() => Math.random() - 0.5)
        .slice(0, 90);

      const artworkData = await Promise.all(
        objectIDs.map(async (id) => {
          const res = await axios.get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          return {
            id,
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

  // Fetch recommendations
  const fetchRecommendations = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8083/api/goview/object/recommend?page=${page}&limit=${itemsPerPage}`,
        {
          headers: {
            'satoken': authState.token
          },
        }
      );

      if (response.data && response.data.code === 200 && Array.isArray(response.data.data)) {
        const recommendedData = response.data.data.map((item) => ({
          id: item.objectID,
          img: item.primaryImageSmall || 'https://via.placeholder.com/400x300',
          title: item.title || 'Untitled',
          description: item.medium || 'No description available',
        }));

        setFilteredArtworks(recommendedData);
        setCurrentPage(parseInt(response.data.page));
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setFilteredArtworks([]);
    }
  };

  // Fetch user's collection
  const fetchUserCollection = async () => {
    if (!authState.token) return;

    try {
      const response = await axios.get(
        'http://localhost:8083/api/goview/object/getlike',
        {
          headers: {
            'satoken': authState.token
          }
        }
      );
      if (response.data && response.data.code === 200 && Array.isArray(response.data.data)) {
        const likedArtIDs = new Set(response.data.data.map(art => art.objectID));
        setUserCollection(likedArtIDs);
      }
    } catch (error) {
      console.error('Error fetching user collection:', error);
    }
  };

  // Handle collection updates
  const handleAddToCollection = async (artId) => {
    if (!authState.token) {
      alert('You need to login or sign up to collect this art piece.');
      navigate('/sign-in');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8083/api/goview/object/like',
        { objectID: artId },
        {
          headers: {
            'satoken': authState.token
          }
        }
      );

      if (response.data.code === 200) {
        setUserCollection(prev => {
          const newSet = new Set(prev);
          if (newSet.has(artId)) {
            newSet.delete(artId);
          } else {
            newSet.add(artId);
          }
          return newSet;
        });
        fetchUserCollection();
      }
    } catch (error) {
      console.error('Error updating collection:', error);
      alert('Failed to update collection.');
    }
  };

  // Handle category selection
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredArtworks(artworks);
    } else if (selectedCategory === 'Recommend to You') {
      fetchRecommendations(1);
    }
  };

  // Handle page changes
  const handlePageChange = (event, value) => {
    if (category === 'Recommend to You') {
      fetchRecommendations(value);
    } else {
      setCurrentPage(value);
      const startIndex = (value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setFilteredArtworks(artworks.slice(startIndex, endIndex));
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
          {['All', 'Recommend to You'].map((cat) => (
            <Chip
              key={cat}
              label={cat}
              variant={category === cat ? 'filled' : 'outlined'}
              onClick={() => handleCategoryClick(cat)}
            />
          ))}
        </Box>

        {/* Search Bar */}
        <SearchBar />
      </Box>

      {/* Art Pieces Grid */}
      <Grid container spacing={3}>
        {filteredArtworks.map((artwork) => (
          <Grid item xs={12} sm={6} md={4} key={artwork.id}>
            <CardItem
              id={artwork.id}
              img={artwork.img}
              title={artwork.title}
              description={artwork.description}
              isCollected={userCollection.has(artwork.id)}
              onAddToCollection={() => handleAddToCollection(artwork.id)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
        <Pagination
          count={category === 'Recommend to You' ? totalPages : Math.ceil(artworks.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}