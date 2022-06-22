import React from 'react';
import { Box, Typography } from '@mui/material';



const HeroCard = ({ title, description, imagePath }) => {

    return (
    <Box sx={{margin: 2, border: 'none'}}>
      <img src={`../../images/${imagePath}`} width={65}/>
      <Typography variant='h4' sx={{fontWeight: 400}}>{title}</Typography>
      <Typography sx={{pt: 2}} variant='body1' color='neutral.main'>{description}</Typography>
    </Box>
  );
};

export default HeroCard;
