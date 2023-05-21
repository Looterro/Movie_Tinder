import React from 'react';
import { CardContent, Typography, Box, Divider, Rating, Grid } from '@mui/material';

interface MovieDetailsProps {
  title: string;
  rating: number;
  summary: string;
  maxRating: number;
  calculateScaledRating: () => number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ title, rating, summary, maxRating, calculateScaledRating }) => {

    return (

        <Grid item xs={12} md={7}>
            <CardContent sx={{ p: '4px 0 0 0'}}>

                <Typography
                    variant = "h5"
                    sx={{
                        fontWeight: 'bold',
                        p: '8px 8px 9px 0',
                        color: '#333',
                        pl: '8px',
                    }}
                >
                    {title}
                </Typography>

                <Divider sx={{ my: 1, backgroundColor: '#EE4B2B' }} />

                <Box display='flex' alignItems='center' sx={{ pl: '9px' }} >

                    <Rating 
                        name="movie-rating" 
                        value= {calculateScaledRating()} 
                        max={maxRating} 
                        readOnly 
                        sx={{ color: '#f44336' }} 
                    />

                    <Typography variant='body2' sx={{ color: '#777', ml: '8px' }}>
                        {rating.toFixed(1)}/10
                    </Typography>

                </Box>

                <Divider sx={{ my: 1, backgroundColor: '#EE4B2B' }} />

                <Box sx= {{ p: '4px 8px 0 8px', maxHeight: '120px', overflow: 'auto' }}>
                    <Typography variant='body2' sx={{ color: '#555' }}>
                        {summary}
                    </Typography>
                </Box>
                
            </CardContent>
        </Grid>
    );


};

export default MovieDetails