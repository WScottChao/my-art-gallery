import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import AppAppBar from '../components/AppAppBar'; // Top Bar
import Footer from '../components/Footer'; // Footer
import { AuthContext } from '../context/AuthContext';

export default function MyCollection() {
  const { authState } = useContext(AuthContext); // Get token from AuthContext
  const [collection, setCollection] = useState([]); // Collection data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling
  const [page, setPage] = useState(1); // Current page
  const itemsPerPage = 12; // Number of items per page

  // Fetch the user's collection
  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get('http://localhost:8083/api/goview/object/getlike', {
          headers: { Authorization: `Bearer ${authState.token}` },
        });
        setCollection(response.data || []);
      } catch (err) {
        console.error('Error fetching collection:', err);
        setError('Failed to load collection. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [authState.token]);

  // Calculate pagination
  const totalPages = Math.ceil(collection.length / itemsPerPage);
  const currentItems = collection.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return <Typography align="center">Loading...</Typography>;
  }

  return (
    <>
      {/* Top Bar */}
      <AppAppBar />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Collection
        </Typography>

        {/* Error Message */}
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}

        {/* No Collection Case */}
        {collection.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
            You currently don't have collections.
          </Typography>
        ) : (
          <>
            {/* Art Pieces Grid */}
            <Grid container spacing={3}>
              {currentItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={item.primaryImageSmall || 'https://via.placeholder.com/400x300'}
                      alt={item.title || 'Art Image'}
                      sx={{ height: 200, objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="subtitle1">{item.title || 'Untitled'}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.medium || 'No description available'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            )}
          </>
        )}
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}
