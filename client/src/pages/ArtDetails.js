import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { AuthContext } from '../context/AuthContext';

export default function ArtDetails() {
  const { authState } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCollected, setIsCollected] = useState(false);
  const [addToCollectionStatus, setAddToCollectionStatus] = useState('');

  // 获取艺术品详情
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

  // 检查收藏状态
  useEffect(() => {
    const checkCollectionStatus = async () => {
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

        if (response.data.code === 200 && Array.isArray(response.data.data)) {
          const isInCollection = response.data.data.some(item => item.objectID === parseInt(id));
          setIsCollected(isInCollection);
        }
      } catch (error) {
        console.error('Error checking collection status:', error);
      }
    };

    checkCollectionStatus();
  }, [id, authState.token]);

  // 处理收藏/取消收藏
  const handleAddToCollection = async () => {
    if (!authState.token) {
      setAddToCollectionStatus('You must be logged in to add to your collection.');
      navigate('/sign-in');
      return;
    }

   try {
    const response = await axios.post(
      'http://localhost:8083/api/goview/object/like',
      { objectID: artwork.objectID }, // 改为使用 objectID
      {
        headers: {
          'satoken': authState.token
        }
      }
    );

      if (response.data.code === 200) {
        setIsCollected(!isCollected);
        setAddToCollectionStatus(
          isCollected
            ? 'Artwork removed from your collection.'
            : 'Artwork successfully added to your collection!'
        );
      }
    } catch (error) {
      console.error('Error updating collection:', error);
      setAddToCollectionStatus('Failed to update collection. Please try again.');
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <AppAppBar />

      <Box component="main" sx={{ flexGrow: 1, minHeight: '0vh', paddingBottom: '50px' }}>
        <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Container maxWidth="md" sx={{ py: 4, mt: { xs: 8, sm: 10 } }}>
            <Button onClick={() => navigate('/')} sx={{ mb: 2 }}>
              ← Back to Home
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <img
                src={artwork.primaryImage || 'https://via.placeholder.com/600x400'}
                alt={artwork.title}
                style={{ maxWidth: '100%', borderRadius: 8 }}
              />

              <Typography variant="h4" sx={{ mt: 3 }}>{artwork.title}</Typography>
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

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    textTransform: 'none',
                    backgroundColor: isCollected ? '#A8643C' : '#C38154',
                    '&:hover': { backgroundColor: isCollected ? '#8B4513' : '#A8643C' },
                  }}
                  startIcon={isCollected ? <StarIcon /> : <StarBorderIcon />}
                  onClick={handleAddToCollection}
                >
                  {isCollected ? 'Remove from Collection' : 'Add to My Collection'}
                </Button>
              </Box>

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

          <Footer />
        </Container>
      </Box>
    </>
  );
}