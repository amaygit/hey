import * as React from 'react';
import Box from '@mui/material/Box'
import CircularProgress  from '@mui/material/CircularProgress';

export function CircularIndeterminate(){
    return (
        <Box sx={{display:'flex'}}>
            <CircularProgress />
        </Box>
    );
}