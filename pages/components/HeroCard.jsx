import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const HeroCard = ({ title, description, imagePath }) => {
  const imagepathSlug = `/../images/${imagePath}`;
  return (
    <Box sx={{ margin: 2, border: 'none' }}>
      <Image src={imagepathSlug} width={65} height={65} alt={title} />
      <Typography variant='h4' sx={{ fontWeight: 400 }}>
        {title}
      </Typography>
      <Typography sx={{ pt: 2 }} variant='body1' color='neutral.main'>
        {description}
      </Typography>
    </Box>
  );
};

export default HeroCard;
