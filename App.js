import {Box,styled} from '@mui/material'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import News from './components/News';
const Container=styled(Box)(({theme})=>({
  width:'60%',
  margin:'40px auto 0 auto',
  [theme.breakpoints.down('md')]:{
    width:'75%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'85%'
  }
}));


function App() {
  return (
    <Box>
      <Header/>
      <Box>
        <Container>
      <InfoHeader/>
      <News/>
      </Container>
    </Box>
    </Box>
  );
}

export default App;
