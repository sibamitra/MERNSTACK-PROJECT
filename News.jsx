import React, { useEffect, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { getNews } from '../service/api';
import Article from './Article';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (pageNum) => {
    try {
      const response = await getNews(pageNum);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  };

  const loadMore = async () => {
    setLoading(true);
    const newData = await fetchNews(page + 1);
    if (newData.length > 0) {
      setNews(prevNews => [...prevNews, ...newData]);
      setPage(prevPage => prevPage + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await fetchNews(1);
      setNews(initialData);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {news.slice(0, page * 5).map(data => (
        <Article key={data.id} data={data} />
      ))}
      <Button
        variant="contained"
        onClick={loadMore}
        disabled={loading || page * 5 >= news.length}
        style={{ margin: '20px auto', display: 'block' }}
      >
        {loading ? 'Loading...' : 'Load More'}
      </Button>
      <Box mt={2} className="footer" bgcolor="grey" color="white" p={2} textAlign="center" >
        <Button href="https://www.facebook.com/inshortsapp/" target="_blank">
          <FacebookIcon style={{ color: 'white' }} />
        </Button>
        <Button href="https://twitter.com/inshorts" target="_blank">
          <TwitterIcon style={{ color: 'white' }} />
        </Button>
        <Button href="https://www.linkedin.com/company/inshorts/" target="_blank">
          <LinkedInIcon style={{ color: 'white' }} />
        </Button>
        <Box mt={2}>
          <Button href="https://form.jotform.com/232282577011451" color="inherit">Contact Us</Button> | <Button href="https://inshorts.com/tnc" color="inherit">Terms and Conditions</Button>
        </Box>
        <Box mt={2}>
          Powered by <Button href="https://inshorts.com/" color="inherit">Inshorts</Button>
        </Box>
        <Box mt={2}>
          Inshorts Clone Made by Sibaditya Mitra
        </Box>
      </Box>
    </Container>
  );
};

export default Articles;
