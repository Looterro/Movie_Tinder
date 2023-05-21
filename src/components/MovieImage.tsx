import React from 'react';
import { Box, Grid } from '@mui/material';

interface MovieImageProps {
  imageURL: string;
  title: string;
}

const MovieImage: React.FC<MovieImageProps> = ({ imageURL, title }) => {

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
                    src={imageURL}
                    alt={title}
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

export default MovieImage;
