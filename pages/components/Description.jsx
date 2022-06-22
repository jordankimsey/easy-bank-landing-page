import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Description = () => {
  return (
    <Box ml={{lg: 2}} maxWidth='sm' mt={{xs: 20, md: 10}}>
      <Typography variant='h4'>Why choose Easybank?</Typography>

      <Typography pt={2} variant='body1' color='neutral.main'>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </Typography>
    </Box>
  );
};

export default Description;
