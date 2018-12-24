import axios from 'axios';

export default async function(){
    try{
        const response = await axios.get('http://x-mode.co.il/exam/allMovies/allMovies.txt');
        const {movies} = response.data; 
        return movies.sort((a,b) => Number(b.year) - Number(a.year));
    }
    catch(error){
        return [];
    }
}