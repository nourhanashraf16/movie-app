import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./MovieDetails.css"


export const MovieDetails = () => {
    const params = useParams();
    console.log(params);
    const myApiKey = "f1254dfc201f7d7d83c1a4b2b8a14a03"
    const movieId = params.id;
    const movieMediaType = params.mediatype;
    const [movie ,setMovie] = useState({});
    useEffect( ()=>{
     const fetchMovieDetails = async()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/${movieMediaType}/${movieId}?api_key=${myApiKey}`);
        console.log(response);
        console.log(response.data);
        setMovie(response.data)
     }
     fetchMovieDetails ();
    },[]);

const imgUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`
  return (
 <section className='movie_details'>
    <div className="">
        <div className="row " style={{backgroundImage : `url(${imgUrl})`}}>
        <div className=''>
            <figure className='movie_details_img'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-details'/>
            </figure>
        </div>
        <div className='col-md-6 offset-md-6 '>
        <div className='movie_details_content'>
            <h5>{movie.release_date? movie.release_date : movie.first_air_date}</h5>
            <h3>{movie.title?movie.title:movie.name }</h3>
            <p className='text-secondary font-weight-bold movie_details_description'>{movie.overview && movie.overview }</p>
          </div>
        </div>
        </div>
       
    </div>
 </section>
  )
}
