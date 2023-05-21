import React from 'react';
import MovieCard from './MovieCard';
import useMovieRecommendations from '../hooks/useMovieRecommendations';
import '../styles/MovieList.css'


const MovieList: React.FC = () => {

    // Fetch the current movie and event handlers from the custom useMovieRecommendations hook
    const {currentMovie, handleAccept, handleReject} = useMovieRecommendations();

    // Event handler for accepting a movie and moving to the next one
    const handleAcceptAndNext = () => {
            
        handleAccept(currentMovie.id);
    
    };

    // Event handler for rejecting a movie and moving to the next one
    const handleRejectAndNext = () => {
        
        handleReject(currentMovie.id);

    };

    return (

        <div className="list-container">

            {/*  If there is no movies display a message, else display the current index card*/}
            {currentMovie ? (
               
               <MovieCard 
                    movie={currentMovie}
                    onAccept={handleAcceptAndNext}
                    onReject={handleRejectAndNext}
               />

            ) : (

                <div className='message-container'>
                    <h6 className='message'>No more movies in your inventory</h6>
                </div>

            )}

        </div>

    );

}

export default MovieList;