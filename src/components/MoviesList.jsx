import React, { useEffect ,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/moviesSlice";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {fetchSearchMovies} from "../redux/slices/searchSlice"
export const MoviesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const movies = useSelector((store) =>  store.moviess.moviesList );
  console.log(movies);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  //   const filteredMovies = movies.filter((el) => {
  //     //if no input the return the original
  //     if ( inputText=== '') {
  //         return el;
  //     }
  //     //return the item which contains the user input
  //     else {
  //        return el.title?el.title.toLowerCase().includes(inputText):el.name.toLowerCase().includes(inputText)
  //     }
  // })
  const searchFunc=()=>{
    navigate('/search');
    dispatch(fetchSearchMovies(inputText))
  }
  return (
    <>
      <section className='search py-5'>
    <div className="container">
        <div className="row">
            <div className='col-md-8 '>
                <div className="search-bar">
                    <input type="text"
                     placeholder='find movies tv shows documentary and more...' 
                     className='shadow'
                    onChange={inputHandler} />
                    <button onClick={searchFunc} className='search-icon'>
                    <BsSearch />
                    </button>
                   
                </div>
            </div>
        </div>
    </div>
  </section>
    <section className="movies_items">
      <div className="container">
        <div className="row">
          {movies &&
            movies.map((movie) => {
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
                    <h5>{movie.original_title ? movie.original_title : movie.original_name  }</h5>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  
    </>

  );
};
