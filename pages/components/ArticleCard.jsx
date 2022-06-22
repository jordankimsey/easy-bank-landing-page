import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';

const ArticleCard = ({ article }) => {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='250'
          width='50'
          image={`../../images/${article.image}`}
          alt='article image'
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            textAlign: 'left',
          }}
        >
          <Typography pt={2} variant='p' color='neutral.main'>
            By {article.author}
          </Typography>
          <Typography
            variant='h5'
            fontWeight='700'
            pt={2}
            lineHeight={1}
            color='primary.main'
            sx={{'&:hover': {color: 'primary.light'}}}
          >
            {article.title}
          </Typography>
          <Typography pt={2}  variant='p' color='neutral.main'>
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
