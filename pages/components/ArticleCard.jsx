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
import Image from 'next/image'

const ArticleCard = ({ article }) => {
  const imagePath = `/images/${article?.imageP}`;
  return (
    <Card elevation={0}>
      <CardActionArea>
      
        <Image src={imagePath} alt='image' height={300} width={500}/>
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
