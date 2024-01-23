import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import footer_icon from '../assets/images/Logo-lv(1).png';
import './footer.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {

  const handleRefreshToHomePage = () => {
		window.location.href = '/';
	}

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='footer_container'>
        <Box>
          <div className='top_container'>
              <Divider
                orientation='horizontal'
                flexItem
                className='footer_divider'
              ></Divider>
              <div className='top_inner'>
                <div className='title_container'>
                  <img src={footer_icon} alt='icon' className='footer_icon' onClick={handleRefreshToHomePage}/>
				          <Typography className='footer_title' onClick={handleRefreshToHomePage}>Lakshmi Venkatesh</Typography>
                </div>
                {/* <Stack className='social_stack' direction="row" alignItems="center">
                  <Link href="https://www.instagram.com/" target='_blank'>
                    <InstagramIcon fontSize="medium" sx={{ color: "#FFFFFF" }} />
                  </Link>
                  <Link href="https://www.youtube.com/" target='_blank'>
                    <YouTubeIcon fontSize="medium" sx={{ color: "#FFFFFF" }} />
                  </Link>
                  <Link href="https://www.facebook.com/" target='_blank'>
                    <FacebookIcon sx={{ color: "#FFFFFF" }} fontSize="medium" />
                  </Link>
                  <Link href='https://twitter.com/' target='_blank'>
                    <TwitterIcon fontSize="medium" sx={{ color: "#FFFFFF" }} />
                  </Link>
                  <Link href='https://in.linkedin.com/' target='_blank'>
                    <LinkedInIcon fontSize="medium" sx={{ color: "#FFFFFF" }} />
                  </Link>
                  
                </Stack> */}
              </div>
              <Divider
                orientation='horizontal'
                flexItem
                className='footer_divider'
              ></Divider>
          </div>

          <div className='bottom_container'>
            <div className='list_container'>
              <Typography className='list_title'>QUICK LINKS</Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={(e) => navigate('/')}>
                  <ListItemText className={location.pathname === '/' ? 'active' : ''} primary="Home" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/product')}>
                  <ListItemText className={location.pathname === '/product' ? 'active' : ''} primary="Products" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/about')}>
                  <ListItemText className={location.pathname === '/about' ? 'active' : ''} primary="About us" />
                </ListItem>
                <ListItem onClick={(e) => navigate('/contactus')}>
                  <ListItemText className={location.pathname === '/contactus' ? 'active' : ''} primary="Contact us" />
                </ListItem>
              </List>
              
            </div>
            <div className='list_container'>
              <Typography className='list_title'>CONTACT US</Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem >
                  <ListItemText className={location.pathname === '/#' ? 'active' : ''} primary="Phone: +91 9876543210" />
                </ListItem>
                <ListItem >
                  <ListItemText className={location.pathname === '/#' ? 'active' : ''} primary="E-mail: info.lakshmivenkatesh@gmail.com" />
                </ListItem>               
              </List>
            </div>
            <div className='list_container2'>
              <Typography className='list_title'>OUR ADDRESS</Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem >
                  <ListItemText className='address' primary="K.Gopal Bhat & Sons," />
                </ListItem>
                <ListItem >
                  <ListItemText className='address' primary="Lakshmi Venkatesh" />
                </ListItem>
                <ListItem >
                  <ListItemText className='address' primary="Katapady, Udupi district," />
                </ListItem>
                <ListItem >
                  <ListItemText className='address' primary="Karnataka - 574105" />
                </ListItem>
              </List>
            </div>
          </div>
          <div className='copyright_container'>
            <Typography className='copy_text'>Copyright © 2024 Lakshmi Venkatesh. All Rights Reserved</Typography>
            {/* <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={(e) => navigate('/privacy')}>
                  <ListItemText className={location.pathname === '/privacy' ? 'active' : ''} primary="Privacy" />
                </ListItem> 
                 <ListItem onClick={(e) => navigate('/terms-and-conditions')}>
                  <ListItemText className={location.pathname === '/terms-and-conditions' ? 'active' : ''} primary="Terms and Conditions" />
                </ListItem>
              </List> */}
          </div>
        </Box>
    </div>
  )
}

export default Footer;