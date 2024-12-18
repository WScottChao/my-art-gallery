import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import CardItem from '../components/CardItem';
import SearchBar from "../components/SearchBar";
import { AuthContext } from '../context/AuthContext';
import Chip from '@mui/material/Chip';

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('name') || '';

  const [allResults, setAllResults] = useState([]); // 存储所有搜索结果
  const [displayedResults, setDisplayedResults] = useState([]); // 当前页显示的结果
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [userCollection, setUserCollection] = useState(new Set());
    const navigate = useNavigate();


  const { authState } = useContext(AuthContext);
  const itemsPerPage = 9;

  // 获取搜索结果
  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8083/api/lowCode/sys/search?name=${query}`
      );

      if (response.data.code === 200 && Array.isArray(response.data.data)) {
        setAllResults(response.data.data);
        // 设置第一页数据
        updateDisplayedResults(1, response.data.data);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  // 更新当前页显示的数据
  const updateDisplayedResults = (page, results = allResults) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedResults(results.slice(startIndex, endIndex));
  };

  // 获取用户收藏列表
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
      if (response.data.code === 200 && Array.isArray(response.data.data)) {
        const likedArtIDs = new Set(response.data.data.map(art => art.objectID));
        setUserCollection(likedArtIDs);
      }
    } catch (error) {
      console.error('Error fetching user collection:', error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
    fetchUserCollection();
  }, [query]); // 只在搜索词变化时重新获取数据

  // 处理分页变化
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    updateDisplayedResults(value);
  };

  // 处理收藏/取消收藏
  const handleAddToCollection = async (artId) => {
    if (!authState.token) {
      alert('You need to login or sign up to collect this art piece.');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:8083/api/goview/object/like',
        { id: artId },
        {
          headers: {
            'satoken': authState.token
          }
        }
      );
      if (response.data.code === 200) {
        setUserCollection((prev) => {
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

  // 添加处理类别点击的函数
  const handleCategoryClick = (category) => {
    if (category === 'All') {
      navigate('/');
    } else if (category === 'Recommend to You') {
      navigate('/?category=recommend');
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: 'background.default',
      pt: 8
    }}>
      <AppAppBar />

      <Container maxWidth="lg">
        {/* 标题部分 */}
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="h2" component="h1">My Art Gallery</Typography>
          <Typography variant="subtitle1">Explore your favorite art</Typography>
        </Box>

        {/* 搜索和分类部分 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            mb: 4,
          }}
        >
          {/* 类别选择器 */}
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
            <Chip
              label="All"
              variant="outlined"
              onClick={() => handleCategoryClick('All')}
              sx={{
                backgroundColor: '#e6e0d8',
                '&:hover': {
                  backgroundColor: '#d4cec6',
                },
              }}
            />
            <Chip
              label="Recommend to You"
              variant="outlined"
              onClick={() => handleCategoryClick('Recommend to You')}
              sx={{
                backgroundColor: 'transparent',
                borderColor: '#e6e0d8',
                '&:hover': {
                  backgroundColor: '#f5f1eb',
                },
              }}
            />
          </Box>

          {/* 搜索框 */}
          <SearchBar defaultValue={query} />
        </Box>

        {/* 搜索结果数量显示 */}
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Found {allResults.length} results for "{query}"
        </Typography>

        {/* 搜索结果网格 */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', py: 4 }}>
              <Typography>Loading...</Typography>
            </Box>
          ) : displayedResults.length > 0 ? (
            displayedResults.map((result) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <CardItem
                  id={result.objectID}
                  img={result.primaryImageSmall || 'https://via.placeholder.com/400x300'}
                  title={result.title || 'Untitled'}
                  description={result.medium || 'No description available'}
                  isCollected={userCollection.has(result.objectID)}
                  onAddToCollection={() => handleAddToCollection(result.objectID)}
                />
              </Grid>
            ))
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', py: 4 }}>
              <Typography>No results found.</Typography>
            </Box>
          )}
        </Grid>

        {/* 分页控件 */}
        {allResults.length > itemsPerPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <Pagination
              count={Math.ceil(allResults.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
}