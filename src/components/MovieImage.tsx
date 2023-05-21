import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';

interface MovieImageProps {
  imageURL: string;
  title: string;
}

const MovieImage: React.FC<MovieImageProps> = ({ imageURL, title }) => {

    //Check if the screen size is small
    const isSmallScreen = useMediaQuery('(max-width: 1000px)');

    return (

        <Grid item xs={12} md={5} alignContent={'center'} sx={{ justifyContent: 'center'}}>       
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
                    src={imageURL}
                    alt={title}
                    style={{
                        maxWidth: isSmallScreen ? '40vw' : '100%',
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

export default MovieImage;
