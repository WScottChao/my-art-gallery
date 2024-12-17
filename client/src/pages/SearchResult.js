import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import CardItem from '../components/CardItem';
import { AuthContext } from '../context/AuthContext';

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('name') || '';

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [userCollection, setUserCollection] = useState(new Set());

  const { authState } = useContext(AuthContext);
  const satoken = authState?.token || localStorage.getItem('token');
  const itemsPerPage = 9;

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8083/api/lowCode/sys/search?name=${query}&page=${currentPage}&limit=${itemsPerPage}`
      );
      setResults(response.data.data || []);
      setTotalResults(response.data.total || 0);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserCollection = async () => {
    if (!satoken) return;
    try {
      const response = await axios.get(
        'http://localhost:8083/api/goview/object/getlike',
        { headers: { Authorization: `Bearer ${satoken}` } }
      );
      const likedArtIDs = new Set(response.data.map((art) => art.id));
      setUserCollection(likedArtIDs);
    } catch (error) {
      console.error('Error fetching user collection:', error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
    fetchUserCollection();
  }, [query, currentPage]);

  const handleAddToCollection = async (artId) => {
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
        setUserCollection((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(artId)) {
            newSet.delete(artId);
          } else {
            newSet.add(artId);
          }
          return newSet;
        });
      }
    } catch (error) {
      console.error('Error adding to collection:', error);
      alert('Failed to update collection.');
    }
  };

  return (
    <Box>
      {/* App Bar */}
      <AppAppBar />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        {/* Title Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Search Results
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {`Found ${totalResults} results for "${query}"`}
          </Typography>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={3}>
          {loading ? (
            <Typography variant="h6" sx={{ mx: 'auto', my: 4 }}>
              Loading...
            </Typography>
          ) : results.length > 0 ? (
            results.map((result) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <CardItem
                  id={result.id}
                  img={result.img || 'https://via.placeholder.com/400x300'}
                  title={result.title || 'Untitled'}
                  description={result.description || 'No description available'}
                  isCollected={userCollection.has(result.id)}
                  onAddToCollection={() => handleAddToCollection(result.id)}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ mx: 'auto', my: 4 }}>
              No results found.
            </Typography>
          )}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Pagination
            count={Math.ceil(totalResults / itemsPerPage)}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            color="primary"
          />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
