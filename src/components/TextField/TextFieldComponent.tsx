import * as React from 'react';
import { Box, TextField } from '@mui/material';

export function TextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter your name" variant="outlined" />
    </Box>
  );
}
