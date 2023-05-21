import React from 'react';
import './styles/App.css';
import { Typography, Container } from '@mui/material';
import MovieList from './components/MovieList';

function App() {
  return (

    <div>
      
      <Container maxWidth={false} className="container">

        <Typography variant="h4" align="center" className="title">
          Tinder for Movies
        </Typography>

        <MovieList />

      </Container>

    </div>

  );
}

export default App;
