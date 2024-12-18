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
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';

export default function MyCollection() {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchCollection();
  }, [authState.token]);

  const fetchCollection = async () => {
    try {
      if (!authState.token) {
        navigate('/sign-in');
        return;
      }

      const response = await axios.get('http://localhost:8083/api/goview/object/getlike', {
        headers: {
          'satoken': authState.token
        }
      });

      if (response.data.code === 200 && Array.isArray(response.data.data)) {
        setCollection(response.data.data);
        setTotalPages(Math.ceil(response.data.data.length / itemsPerPage));
      }
    } catch (err) {
      console.error('Error fetching collection:', err);
      setError('Failed to load collection. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCollection = async (event, artId) => {
    event.stopPropagation(); // 防止触发卡片点击事件

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
        // 重新获取收藏列表
        fetchCollection();
      }
    } catch (error) {
      console.error('Error updating collection:', error);
      alert('Failed to update collection status.');
    }
  };

  const handleCardClick = (artId) => {
    navigate(`/art/${artId}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return <Typography align="center">Loading...</Typography>;
  }

  const currentItems = collection.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <AppAppBar />
      <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Collection
        </Typography>

        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}

        {collection.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
            You currently don't have any collections.
          </Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {currentItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.objectID}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      '&:hover': { boxShadow: 6 }
                    }}
                    onClick={() => handleCardClick(item.objectID)}
                  >
                    <CardMedia
                      component="img"
                      image={item.primaryImageSmall || 'https://via.placeholder.com/400x300'}
                      alt={item.title || 'Art Image'}
                      sx={{ height: 200, objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle1">
                          {item.title || 'Untitled'}
                        </Typography>
                        <IconButton
                          color="warning"
                          onClick={(event) => handleAddToCollection(event, item.objectID)}
                        >
                          <StarIcon />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {item.medium || 'No description available'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

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
      <Footer />
    </>
  );
}