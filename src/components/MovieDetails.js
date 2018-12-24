import React from 'react';

const MovieDetails = ({description, poster}) => {
    return (
        <div>
            <img src={poster} alt=""/>
            <p>{description}</p>
        </div>
    );
};

export default MovieDetails;