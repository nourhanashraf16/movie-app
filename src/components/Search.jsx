import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchSearchMovies } from '../redux/slices/searchSlice';
export const Search = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");

    const searchFunc=()=>{
        dispatch(fetchSearchMovies(inputText))
      }
      const searchMoviesList = useSelector((store)=> {
        console.log(store.searchMoviess.searchMovies  )    });
          
         

      console.log(searchMoviesList)
    //   const filteredData = searchMoviesList.filter((el) => {
    //     //if no input the return the original
    //     if (inputText === '') {
    //         return el;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return el.includes(inputText);
    //     }
    // });

  return (
<div>
        <section className='search py-5'>
        <div className="container">
            <div className="row">
                <div className='col-md-8 '>
                    <div className='search-bar'>
                        <input type="text"
                         placeholder='find movies tv shows documentary and more...' 
                         className='shadow'
                        onChange={(e)=>setInputText(e.target.value) } />
                        <button onClick={searchFunc} className='search-icon'>
                        <BsSearch />
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="container">
            <div className="row">
              {/* {filteredData.map((movie)=>{
                     return(
                        <div>
                            <h2>{movie.title0}</h2>
                        </div>
                     )
              })} */}
            </div>
        </div>
      </section>
</div>
  )
}
