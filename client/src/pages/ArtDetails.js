import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar'; // Top Bar
import Footer from '../components/Footer'; // Footer

export default function ArtDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // Navigation
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch detailed information about the artwork
  useEffect(() => {
    const fetchArtworkDetails = async () => {
      try {
        const response = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        setArtwork(response.data);
      } catch (error) {
        console.error('Error fetching artwork details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworkDetails();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      {/* Top Bar */}
      <AppAppBar />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button onClick={() => navigate('/')} sx={{ mb: 2 }}>
          ← Back to Home
        </Button>

        <Box sx={{ textAlign: 'center' }}>
          {/* Artwork Image */}
          <img
            src={artwork.primaryImage || 'https://via.placeholder.com/600x400'}
            alt={artwork.title}
            style={{ maxWidth: '100%', borderRadius: 8 }}
          />

          {/* Artwork Details */}
          <Typography variant="h4" sx={{ mt: 3 }}>
            {artwork.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            {artwork.artistDisplayName || 'Unknown Artist'}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {artwork.medium || 'No description available'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Date: {artwork.objectDate || 'Unknown'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Department: {artwork.department || 'N/A'}
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}
