import React from 'react';
import { Button, Box, Grid, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface MovieActionsProps {
  onAccept: () => void;
  onReject: () => void;
}

const MovieActions: React.FC<MovieActionsProps> = ({ onAccept, onReject }) => {
  
    return (

        <Grid item xs={12}>

        <Divider sx={{ backgroundColor: '#EE4B2B' }} />

        <Box display='flex' justifyContent='space-between' alignItems='center' p={1}> 
        
            <Button
                variant='contained'
                color='success'
                startIcon={<CheckIcon />}
                onClick={onAccept}
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
                onClick={onReject}
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

export default MovieActions;
