import {BasicButtons as Button} from '../Button/ButtonComponent';
import './ContainerStyles.css';
import React, { useState, useEffect, ComponentProps } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  CssBaseline,
  Typography,
  TextField,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ListComponent } from '../List';
import type { RootState } from '../../store/store';
import { request as getNamePrediciton } from '../../store/api/getNamePredictions/namePredictionsActions';
import { request as getAllPredictions } from '../../store/api/getAllPredictions/getAllPredictionsActions';

let theme = createTheme();

export function Container(props: ComponentProps<any>) {
  let dispatch = useAppDispatch();
  let { data: getNamePredictionsData } = useAppSelector((st: RootState) => st.getNamePredictions);
  let { data: getAllPredictionsData } = useAppSelector((st: RootState) => st.getAllPredictions);
  let [predictions, setPredictions] = useState<any[]>([]);
  let handleSubmit = (event: any) => {
    event.preventDefault();
    let input = event.target[0].value;
    dispatch(getNamePrediciton(input));
  };

  useEffect(() => {
    dispatch(getAllPredictions());
  }, [dispatch])

  useEffect(() => {
    if (getAllPredictionsData) {
      setPredictions(getAllPredictionsData);
    }
  }, [getAllPredictionsData])

  useEffect(() => {
    if (getNamePredictionsData) {
      setPredictions( Array.isArray(getNamePredictionsData) ?
       getNamePredictionsData : 
       [getNamePredictionsData]);
    }
  }, [getNamePredictionsData])

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography component="h1" variant="h3">
              Don't know your gender?<br />We will help!
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
               label="your name"
               placeholder='Enter your name'
               variant='standard'
               fullWidth
               id='name'
               name="name"
                 />
              <Box sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Button  />
                <Box sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <ListComponent predictions={predictions} {...props} />
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}