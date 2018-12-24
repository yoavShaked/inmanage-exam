import axios from 'axios';

export default async function(id){
    try{
        const resopnse = await axios.get(`http://x-mode.co.il/exam/descriptionMovies/${id}.txt`);
        return resopnse.data;
    }
    catch(error){
        return {};
    }
}