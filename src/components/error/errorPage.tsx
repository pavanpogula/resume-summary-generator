import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import image from "./image.png"
export default function ErrorPage({text}:{text:string}) {
  return (
    <Box minHeight={'100vh'} my={10}>
    <Card sx={{ maxWidth: 345,mx:'auto'}} >
      <CardActionArea sx={{bgcolor:'white'}} >
        <CardMedia
          component="img"
          height="200"
          width={200}
        sx={{objectFit:'contain'}}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography align='center' color={'black'} gutterBottom variant="h5" component="div">
           {` ${text} :/ `}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  );
}