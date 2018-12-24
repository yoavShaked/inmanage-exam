import React, { Component } from 'react';
import getMovies from '../service/getMovies';
import MovieItem from './movieItem';
import SearchField from './SearchField';
import getMovieDetails from '../service/getMovieDetails';
import MovieDetails from './MovieDetails';

export default class MoviesList extends Component {

    state = {
        movies: [],
        movie_result_search: null,
        show_movies: true,
        show_movie_details: false,
        movie_details: {
            poster: '',
            description: ''
        }
    }

    componentDidMount() {
        getMovies().then(movies => this.setState({ movies }));
    }

    filterMovies = movieName => {
        const { movies } = this.state;

        if (movieName !== '') {
            movies.forEach(movie => {
                if (movie.name === movieName) {
                    this.setState({ show_movies: false });
                    this.setState({ movie_result_search: movie });
                }
            });
        }
    }

    getDetails = (id) => {
        getMovieDetails(id).then(res => {
            console.log(res);
            const { movie_details } = this.state;
            movie_details.poster = res.imageUrl;
            movie_details.description = res.description;
            this.setState({ movie_details });
            this.setState({ show_movie_details: true });
        });
    }

    clickBackHandler = () => {
        this.setState({show_movie_details:false});
    }

    render() {
        const { movies, movie_result_search, show_movies, show_movie_details, movie_details } = this.state;
        const moviesList = movies.map(movie => <MovieItem
            clickHandler={this.getDetails}
            key={movie.id}
            id={movie.id}
            name={movie.name}
            category={movie.category}
            year={movie.year} />);

        return (
            <div>
                <SearchField filterMovies={this.filterMovies}
                    toggleMovies={() => this.setState({ show_movies: true })} />
                <ul>
                    {show_movies && !show_movie_details && moviesList}
                </ul>
                <div>
                    {!show_movies && !show_movie_details &&
                        <MovieItem
                            key={movie_result_search.id}
                            id={movie_result_search.id}
                            name={movie_result_search.name}
                            category={movie_result_search.category}
                            year={movie_result_search.year} />}
                </div>
                {show_movie_details && 
                <div>
                    <MovieDetails poster={movie_details.poster} description={movie_details.description}/>
                    <button onClick={this.clickBackHandler}>Back</button>
                </div>}
            </div>
        );
    }
}