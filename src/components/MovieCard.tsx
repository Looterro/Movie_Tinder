import React, { useState } from 'react';
import { Card, Grid } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import '../styles/MovieCard.css';
import MovieImage from './MovieImage';
import MovieDetails from './MovieDetails';
import MovieActions from './MovieActions';

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
        setSwipeDirection('left');
        setTimeout(() => {
            onAccept(movie.id);
            setSwipeDirection('');
        }, 400);
    };

    // Handler for rejecting a movie and moving to the next one
    const handleReject = () => {
        setSwipeDirection('right');
        setTimeout(() => {
            onReject(movie.id);
            setSwipeDirection('');
        }, 400);
    };

    // State for tracking the swipe direction
    const [swipeDirection, setSwipeDirection] = useState('');

    // Defining the x-axis and y-axis motion values using framer-motion
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Defining the drag constraints for the movie card using framer-motion
    const xRange = [-800, 800];
    const dragX = useTransform(x, xRange, xRange);

    //Function to handle the drag event
    const handleDragEnd = () => {
       
        const dragDistance = Math.abs(dragX.get());
        const swipeThreshold = 50;

         // If the drag distance is greater than the swipe threshold, then swipe the card
        if (dragDistance > swipeThreshold) {
            
            // If the drag direction is left, then swipe left
            const isSwipeLeft = dragX.get() < 0;

            //combine the swipe with handling the movie acceptance or rejection
            if (isSwipeLeft) {
                handleAccept();
            } else {
                handleReject();
            }
        
            // Reset the x and y motion values
            x.set(0);
            y.set(0);
        }
    };

    return (

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', paddingRight: 0 }}>

            <motion.div
                style= {{ x, y, display: 'flex', justifyContent: 'center', paddingRight: 0 }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
            >

                <Card 
                    sx={{
                        position: 'relative',
                        height: '100%',
                        borderRadius: '12px',
                        backgroundColor: '#f5f5f5',
                        boxShadow: '8px 8px 10px rgba(2.2, 3.2, 0.5, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    className={`movie-card ${swipeDirection}`}
                >

                <Grid container spacing={0}>

                    <MovieImage 
                        imageURL={movie.imageURL}
                        title={movie.title}
                    />

                    <MovieDetails 
                        title={movie.title}
                        rating={movie.rating}
                        summary={movie.summary}
                        maxRating={maxRating}
                        calculateScaledRating={calculateScaledRating}
                    />

                    <MovieActions 
                        onAccept={handleAccept}
                        onReject={handleReject}
                    />

                </Grid>

            </Card>
            
            </motion.div>

        </Grid>

    );

};

export default MovieCard;
