import React from 'react'
import {AppBar,Toolbar,styled} from'@mui/material';
import {Menu} from '@mui/icons-material/';
import Hamburgericon from './Hamburgericon.js'
const StyledHeader=styled(AppBar)`
background-color:#fff;
height:70px;
margin-left:2px;
`;
const MenuIcon=styled(Menu)`
color:#000;
`;
const Image=styled('img')({
height:55,
margin:'auto',
paddingRight:70
})
const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
   <StyledHeader position='static'>
    <Toolbar>
       <Hamburgericon/> <Image src={url} alt='logo'/>
    </Toolbar>
   </StyledHeader>
  )
}

export default Header