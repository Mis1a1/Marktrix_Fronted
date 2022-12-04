import * as React from 'react';
import { Box, Button } from '@mui/material';

export function BasicButtons() {
  return (
    <Box textAlign="center">
      <Button variant="contained"
              type="submit"     
              style={{
              borderRadius: 10,
              backgroundColor: "black",
              padding: "18px 36px",
              fontSize: "12px" 
    }}>Search</Button>
    </Box>
  );
}
