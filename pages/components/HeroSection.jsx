import { Grid } from '@mui/material';
import React from 'react';
import { DUMMY_DATA } from '../../data/DummyData';
import HeroCard from './HeroCard';

const HeroSection = () => {
  
    return (
      <Grid
        container
        mt={6}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        
        {DUMMY_DATA?.map((item) => (
          <Grid key={item.id} item sx={{ border: 'none' }} py={2} sm={6} md={3}>
            <HeroCard
              key={item.id}
              title={item?.title}
              description={item?.description}
              imagePath={item?.imagePath}
            />
          </Grid>
        ))}
        
      </Grid>
    );
};

export default HeroSection;
