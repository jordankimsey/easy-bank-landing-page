import {
  Grid,
  Box,
  ButtonGroup,
  Link,
  IconButton,
  Typography,
  Container,
  ListItemButton,
} from '@mui/material';
import React from 'react';
import whiteLogo from '../../public/images/white-logo.svg';
import Image from 'next/image';
import facebook from '../../public/images/icon-facebook.svg';
import youtube from '../../public/images/icon-youtube.svg';
import twitter from '../../public/images/icon-twitter.svg';
import pinterest from '../../public/images/icon-pinterest.svg';
import instagram from '../../public/images/icon-instagram.svg';
import RequestButton from './RequestButton';

const Footer = () => {
  const navLinks = [
    'About Us',
    'Contact',
    'Blog',
    'Careers',
    'Support',
    'Privacy Policy',
  ];
  return (
    <Grid
      container
      bgcolor='primary.main'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: { md: 20 },
        py: 7,
        mt: 6,
      }}
    >
      <Grid
        item
        md={4}
        xs={12}
        flexGrow={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: { xs: 'center', md: 'space-between' },
        }}
      >
        {/* flexgrow: 1 */}
        <Box>
          <Image
            src={whiteLogo}
            width={170}
            height={20}
            color='white'
            bgColor='white'
            alt='logo'
          />
        </Box>
        <ButtonGroup sx={{ paddingTop: 3 }} disableGutters>
          <IconButton
            aria-label='facebook'
            sx={{ '&:hover': { backgroundColor: 'primary.light' } }}
          >
            <Image src={facebook} alt='facebook' className='bg-hover' />
          </IconButton>
          <IconButton aria-label='youtube'>
            <Image src={youtube} alt='youtube' className='bg-hover' />
          </IconButton>
          <IconButton aria-label='twitter'>
            <Image src={twitter} alt='twitter' className='bg-hover' />
          </IconButton>
          <IconButton aria-label='pinterest'>
            <Image src={pinterest} alt='pinterest' className='bg-hover' />
          </IconButton>
          <IconButton aria-label='instagram'>
            <Image src={instagram} alt='instagram' className='bg-hover' />
          </IconButton>
        </ButtonGroup>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        flexGrow={1}
        sx={{
          justifyContent: { xs: 'center' },
          alignItems: { xs: 'center' },
        }}
      >
        {/* nav links */}
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginTop: { xs: 2, md: 0 } }}
        >
          {navLinks.map((nav, index) => (
            <Grid
            key={index}
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Link
                href='#'
                underline='none'
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
              >
                {nav}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        flexGrow={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-end' },
          justifycontent: 'flex-end',
          marginTop: { xs: 2, md: 0 },
        }}
      >
        <ListItemButton disableGutters>
          <RequestButton />
        </ListItemButton>
        <Typography
          variant='subtitle1'
          color='neutral.main'
          sx={{ marginTop: { xs: 2 } }}
        >
          © Easybank. All Rights Reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
