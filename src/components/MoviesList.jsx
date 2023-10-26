import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/moviesSlice";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { useSearch } from "../hooks/useSearch";
import { useSelect } from "../hooks/useSelect";

export const MoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const movies = useSelector((store) =>  store.moviess.moviesList );
  console.log(movies);

  const {handleInput , querry , searchResult} =useSearch();
  const {selectedMediaType, handleSelect} = useSelect()
  return (
    <>
     <section className='search py-5'>
        <div className="container">
            <div className="row">
                <div className='col-md-8 '>
                    <div className='search-bar'>
                        <input type="text"
                         placeholder='find movies tv shows documentary and more...' 
                         className='shadow'
                         onChange={(e)=>{
                          console.log(e.target.value)
                          handleInput(e.target.value)}}
                        />
                        <button  className='search-icon'>
                        <BsSearch />
                        </button>
                    </div>
                </div>
                <div className="col-md-2 offset-md-2">
                   <select class="form-select" aria-label="Default select example" 
                   onChange={(e)=>handleSelect(e.target.value)}
                   value={selectedMediaType}>
                       <option selected value="all">all-MediaType</option>
                       <option value="movie">movie</option>
                       <option value="tv">tv</option>
                       <option value="person">person</option>
                   </select>
                </div>
            </div>
        </div>
      </section>
      <section className="movies_items">
        <div className="container">
          <div className="row">
            {querry && searchResult.length > 0? (
              searchResult.map((movie) => {
                if(movie.media_type === selectedMediaType || !selectedMediaType || selectedMediaType ==="all"){
                  return (
                    <div className="col-md-6 col-lg-3 movie_item" key={movie.id}>
                      <div className="movie_content">
                        <figure>
                          <Link to={`/moviedetails/${movie.media_type}/${movie.id}`}>
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                              alt="movie-img"
                            />
                          </Link>
                        </figure>
                        <h5>{movie.title ? movie.title : movie.name}</h5>
                      </div>
                    </div>
                  )
                }})
            ) : (
              movies.map((movie) => { 
                if(  movie.media_type === selectedMediaType ||
                  !selectedMediaType ||selectedMediaType ==="all"){
                    return (
                          <div className="col-md-6 col-lg-3 movie_item" key={movie.id}>
                  <div className="movie_content">
                    <figure>
                      <Link to={`/moviedetails/${movie.media_type}/${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="movie-img"
                        />
                      </Link>
                    </figure>
                    <h5>{movie.title ? movie.title : movie.name}</h5>
                  </div>
                </div>
                    )
                  }
                return null
             })
            )}
          </div>
        </div>
      </section>
   
  
    </>

  );
};
