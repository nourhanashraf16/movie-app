import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import { Header } from './components/Header';
import {Home} from "./components/Home";
import {Blog} from "./components/Blog";
import {Movies} from "./components/Movies";
import {TvShows} from "./components/TvShows";
import {Celebs} from "./components/Celebs";
import { MovieDetails } from './components/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
        <div className='app'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/tv-shows' element={<TvShows/>}/>
                <Route  path='/celebs' element={<Celebs/>}/>
                <Route  path='/blog' element={<Blog/>}/>
                <Route  path='/moviedetails/:mediatype/:id' element={<MovieDetails/>}/>
            </Routes>
        </div>
    </BrowserRouter>

  )
}

