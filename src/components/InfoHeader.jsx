import React from 'react';
import { Box, Typography, styled, Link } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  background: '#f44336',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  height: 48,
  marginBottom: 30,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Image = styled('img')({
  height: 34,
  margin: '0 5px', // Adjusted margin to bring the icons closer together
  '&:last-child': {
    margin: '0 20px 0 5px', // Adjusted margin for the last icon
  },
});

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  margin-left: 50px;
  color: white;
`;

const BoldLink = styled(Link)`
  font-weight: bold;
  color:white;
  text-decoration:none;
`;

const InfoHeader = () => {
  const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
  const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
  const inshortsPlayStoreLink = 'https://play.google.com/store/apps/details?id=com.nis.app';

  return (
    <Container>
      <Text>
        For the best experience, use <BoldLink href={inshortsPlayStoreLink} target="_blank">Inshorts</BoldLink> app on your smartphone
      </Text>
      <Box style={{ display: 'flex', marginLeft: 'auto' }}>
        <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527" target="_blank">
          <Image src={appleStore} alt="appleStore" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.nis.app" target="_blank">
          <Image src={googleStore} alt="googleStore" />
        </a>
      </Box>
    </Container>
  );
};

export default InfoHeader;
