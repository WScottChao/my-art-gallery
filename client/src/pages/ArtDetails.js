import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar'; // Top Bar
import Footer from '../components/Footer'; // Footer
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ArtDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // Navigation
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addToCollectionStatus, setAddToCollectionStatus] = useState(''); // To display status messages

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

  // Handle adding artwork to the collection
  const handleAddToCollection = async () => {
    const satoken = localStorage.getItem('satoken'); // Retrieve satoken from localStorage
    if (!satoken) {
      setAddToCollectionStatus('You must be logged in to add to your collection.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8083/api/lowCode/collection/add', // Replace with your backend endpoint
        { id }, // Send the artwork ID
        {
          headers: {
            Authorization: `Bearer ${satoken}`, // Include the satoken in the header
          },
        }
      );
      setAddToCollectionStatus('Artwork successfully added to your collection!');
    } catch (error) {
      console.error('Error adding artwork to collection:', error);
      setAddToCollectionStatus('Failed to add artwork to your collection. Please try again.');
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      {/* Top Bar */}
      <AppAppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: '64px',
        }}
      />

      {/* Main Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '0vh',
          paddingBottom: '50px',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1, // Allows the container to expand and fill available space
            display: 'flex',
            flexDirection: 'column',
            gap: 4, // Spacing between child components
          }}
        >
          {/* Main Content */}
          <Container maxWidth="md" sx={{ py: 4, mt: { xs: 8, sm: 10 } }}>
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

              {/* Add to Collection Button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1, // Add spacing between icon and text
                        textTransform: 'none', // Optional: Keeps text as is without uppercase
                        backgroundColor: '#C38154', // Custom button color
                        '&:hover': { backgroundColor: '#A8643C' }, // Hover effect
                    }}
                    startIcon={<StarBorderIcon />}
                    onClick={handleAddToCollection}
                    >
                    Add to My Collection
                </Button>
            </Box>


              {/* Status Message */}
              {addToCollectionStatus && (
                <Typography
                  variant="body2"
                  color={addToCollectionStatus.startsWith('Failed') ? 'error' : 'primary'}
                  sx={{ mt: 2 }}
                >
                  {addToCollectionStatus}
                </Typography>
              )}
            </Box>
          </Container>

          {/* Footer */}
          <Footer />
        </Container>
      </Box>
    </>
  );
}
