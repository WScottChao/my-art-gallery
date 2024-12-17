import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar'; // App Bar component
import Footer from '../components/Footer'; // Footer component
import Container from '@mui/material/Container';

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
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

export default function SearchResult() {
  const [searchParams] = useSearchParams(); // Get search query from URL
  const query = searchParams.get('name') || '';

  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 6; // Items per page

  // Fetch search results
  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8083/api/lowCode/sys/search?name=${query}&page=${currentPage}&limit=${itemsPerPage}`
      );

      setResults(response.data.data || []);
      setTotalResults(response.data.total || 0); // Assuming backend returns total count
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query, currentPage]);

  return (
    <Box>
      {/* App Bar */}
      <AppAppBar />
      <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Search Result
        </Typography>

      {/* Search Results */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4, px: 4 }}>
        {/* Title */}
        <Box textAlign="center">
          <Typography variant="h4">Search Results</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {`Found ${totalResults} results for "${query}"`}
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={3}>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : results.length > 0 ? (
            results.map((result) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    image={result.img || 'https://via.placeholder.com/400x300'}
                    alt={result.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <StyledCardContent>
                    <Typography variant="subtitle1">{result.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.description || 'No description available'}
                    </Typography>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))
          ) : (
            <Typography>No results found.</Typography>
          )}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
          <Pagination
            count={Math.ceil(totalResults / itemsPerPage)}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            color="primary"
          />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
      </ Container>
    </Box>
  );
}
