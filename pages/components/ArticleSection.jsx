import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ArticleCard from './ArticleCard';
import { DUMMY_ARTICLES } from '../../data/DummyArticles';

const ArticleSection = () => {
  return (
    <Box mt={10}>
      <Typography mb={5} variant='h4'>
        Latest Articles
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='center'
        alignItems={{ xs: 'center', md: 'flex-start' }}
        spacing={3}
      >
        {DUMMY_ARTICLES?.map((article) => (
          <Box maxWidth={350} key={article?.id} maxHeight={600}>
            <ArticleCard key={article?.id} article={article} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ArticleSection;
