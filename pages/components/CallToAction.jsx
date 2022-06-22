import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import RequestButton from './RequestButton';
import Image from 'next/image';
import bgMobile from '../../public/images/bg-intro-mobile.svg';
import bgDesktop from '../../public/images/bg-intro-desktop.svg';
import mockup from '../../public/images/image-mockups.png';

const CallToAction = () => {
  return (
    <Grid container direction='row-reverse'>
      <Grid item xs={12} sm={6}>
        <Box className='overlapGrid' maxWidth='sm'>
          <Image src={bgDesktop} alt='background' layout='responsive' />
          <Image src={mockup} alt='background' layout='responsive' />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-start' },
          justifyContent: 'center',
          paddingY: { sm: 6, md: 0 },
        }}
        px={2}
      >
        <Box maxWidth='sm'>
          <Typography variant='h2' pt={5}>
            Next generation digital banking
          </Typography>
          <Typography variant='p' color='neutral.main' py={2}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Typography>
        </Box>
        <Grid item sx={{ pt: 3 }}>
          <RequestButton />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
