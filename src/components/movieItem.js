import React from 'react';

const MovieItem = ({name, year, category, clickHandler, id}) => {
    return (
        <li>
            <label onClick={() => clickHandler(id)}>GET DETAILS</label>
            <br/>
            <label>{name}</label>
            <br/>
            <label>{year}</label>
            <br/>
            <label>{category}</label>
            <br/>
        </li>
    );
};

export default MovieItem;