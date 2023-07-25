import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQ3OTliZWZlMDQ2YjI0YjViMDRhZGI3OGZjMDA4NiIsInN1YiI6IjY0MTRjMjhlMzEwMzI1MDA4NmY3N2E4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5EdcWBETyx3vdCJX_ITbJLa_LoJnBGv6ud6KWHlhDA";

const headers={
    Authorization: "bearer "+ TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params,
        })
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}

