import { useState, useEffect } from 'react';
import recommendations from '../fakeDB/recommendations.json';

// Custom hook for fetching movie recommendations for movie cards
const useMovieRecommendations = () => {

    // State to store the movie recommendations loaded,
    // in this case from fakeDB recommendations.json file as we don't have a backend
    const [movies, setMovies] = useState(recommendations);

    // State to track the current movie index
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    // State to store the current movie displayed
    const currentMovie = movies[currentMovieIndex];

    // Function for fetching more recommendations when the current movie index changes
    // beyond the loaded length of the movies array. Triggers whenever movies or the current index change.
    useEffect(() => {

        if (currentMovieIndex >= movies.length) {

            // Fetch more recommendations from the backend and append them to the existing movie list
            // The 'recommendations' is a placehiolder for the backend endpoint
            fetch('recommendations')
                .then(res => res.json())
                .then(data => setMovies((prevMovies) => [...prevMovies, ...data]));

        }

    }, [movies, currentMovieIndex]);

    // Event handler for accepting a movie and skipping to the next one
    const handleAccept = async (id: string) => {

        try {

            // Make an API call to mark the movie as rejected using PUT method
            // The 'recommendations' path is a placehiolder for the backend endpoint
            await fetch(`recommendations/${id}/reject`, { method: 'PUT' });

            setCurrentMovieIndex((prevIndex) => prevIndex + 1);

        } catch (error) {

            console.error('Error when rejecting movie: ', error);

        }

    };

    // Event handler for rejecting a movie and skipping to the next one
    const handleReject = async (id: string) => {
            
        try {

            // Make an API call to mark the movie as rejected using PUT method
            // The 'recommendations' path is a placehiolder for the backend endpoint
            await fetch(`recommendations/${id}/reject`, { method: 'PUT' });

            setCurrentMovieIndex((prevIndex) => prevIndex + 1);

        } catch (error) {

            console.error('Error when rejecting movie: ', error);

        }

    }

    return { currentMovie, handleAccept, handleReject };

};

//export the component
export default useMovieRecommendations;