import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Divider, Rating, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/MovieCard.css';

// Props for MovieCard component
interface MovieCardProps {
    movie: {
        id: string;
        imageURL: string;
        title: string;
        summary: string;
        rating: number;
    };
    onAccept: (id: string) => void;
    onReject: (id: string) => void;
}

// MovieCard component
const MovieCard: React.FC<MovieCardProps> = ({ movie, onAccept, onReject }) => {

    // Maximum rating value for calculating the rating percentage
    const maxRating = 5;

    // Function to calculate the scaled rating percentage
    const calculateScaledRating = () => {
        return (movie.rating / 10) * maxRating;
    }

    // Handler for accepting a movie and moving to the next one
    const handleAccept = () => {
        setTimeout(() => {
            onAccept(movie.id);
        }, 400);
    };

    // Handler for rejecting a movie and moving to the next one
    const handleReject = () => {
        setTimeout(() => {
            onReject(movie.id);
        }, 400);
    };

    const MovieImage = () => {

        return (
    
            <Grid item xs={12} md={5}>       
                <Box sx={{
                    p: '14px',
                    pb: '4px',
                    borderRadius: '12px 0 0 12px',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
    
                    <img 
                        src={movie.imageURL}
                        alt={movie.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '8px 8px 10px rgba(2.2, 3.2, 0.5, 0.5)',
                        }}
                    />
    
                </Box>
            </Grid>
            
        );
    
    };

    const MovieDetails = () => {

        return (

            <Grid item xs={12} md={7}>
                <CardContent sx={{ p: '4px 0 0 0'}}>

                    <Typography
                        variant = "h6"
                        sx={{
                            fontWeight: 'bold',
                            p: '0 8px 4px 0',
                            color: '#333',
                        }}
                    >
                        {movie.title}
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
                            {movie.rating.toFixed(1)}/10
                        </Typography>

                    </Box>

                    <Divider sx={{ my: 1, backgroundColor: '#EE4B2B' }} />

                    <Box sx= {{ p: '4px 8px 0 8px', maxHeight: '120px', overflow: 'auto' }}>
                        <Typography variant='body2' sx={{ color: '#555' }}>
                            {movie.summary}
                        </Typography>
                    </Box>
                    
                </CardContent>
            </Grid>
        );

    };

    const MovieActions = () => {
    
     return (

        <Grid item xs={12}>

        <Divider sx={{ backgroundColor: '#EE4B2B' }} />

        <Box display='flex' justifyContent='space-between' alignItems='center' p='1'> 
        
            <Button
                variant='contained'
                color='success'
                startIcon={<CheckIcon />}
                onClick={handleAccept}
                sx={{ 
                    flex: '1',
                    mr: '4px',
                    borderRadius: '8px',
                    backgroundColor: '#4caf50',
                    color: '#fff',
                }}
            >
                Accept
            </Button>

            <Button
                variant='contained'
                color='error'
                startIcon={<CloseIcon />}
                onClick={handleReject}
                sx={{
                    flex: '1',
                    ml: '4px',
                    borderRadius: '8px',
                    backgroundColor: '#f44336',
                    color: '#fff',
                }}
            >
                Reject
            </Button>

        </Box>

     </Grid>

     );

    };

    return (

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', paddingRight: 0 }}>

            <Card sx={{
                position: 'relative',
                height: '100%',
                borderRadius: '12px',
                backgroundColor: '#f5f5f5',
                boxShadow: '8px 8px 10px rgba(2.2, 3.2, 0.5, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Grid container spacing={0}>

                    <MovieImage />

                    <MovieDetails />

                    <MovieActions />

                </Grid>

            </Card>

        </Grid>

    );

};

export default MovieCard;
