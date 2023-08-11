import React, { useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import WebSeriesCard from "./WebSeriesCard";
import { Carousel } from "react-responsive-carousel";
import { AiFillStar } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import { useSelector } from 'react-redux';
import Card from './MovieCard';



export default function PaidContent() {
 
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingMoviesPage, setTrendingMoviesPage] = useState(1);
  let [trendingWebSeries, setTrendingWebSeries] = useState([]);
  let [trendingWebSeriesPage, setTrendingWebSeriesPage] = useState(1);
  let [popularMovies, setPopularMovies] = useState([]);
  let [popularMoviesPage, setPopularMoviesPage] = useState(1);
  let [popularWebSeries, setPopularWebSeries] = useState([]);
  let [popularWebSeriesPage, setPopularWebSeriesPage] = useState(1);
  let [moviesInTheatre, setMoviesInTheatre] = useState([]);
  let [moviesInTheatrePage, setMoviesInTheatrePage] = useState(1);
  let [latestWebSeries, setLatestWebSeries] = useState([]);
  let [latestWebSeriesPage, setLatestWebSeriesPage] = useState(1);
  let [upcomingMovies, setUpcomingMovies] = useState([]);
  let filteredData2 = useSelector(state => state.combineReducersdata.searcheddata)    
  let [searchData, setSearchData] = useState([]);

  useEffect(()=>{
    setSearchData(filteredData2)
  },[filteredData2])




  function getClass(rating) {
    if (rating >= 7) {
      return "carouselMovieRatingGreen";
    } else if (rating >= 6) {
      return "carouselMovieRatingOrange";
    } else {
      return "carouselMovieRatingRed";
    }
  }


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${trendingMoviesPage}`
    )
      .then((res) => res.json())
      .then((data) => setTrendingMovies(tm => [...tm, ...data.results]));

  }, [trendingMoviesPage]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${trendingWebSeriesPage}`
    )
      .then((res) => res.json())
      .then((data) => setTrendingWebSeries(tw => [...tw, ...data.results]));
  }, [trendingWebSeriesPage])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${popularMoviesPage}`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(pm => [...pm, ...data.results]));
  }, [popularMoviesPage])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${popularWebSeriesPage}`
    )
      .then((res) => res.json())
      .then((data) => setPopularWebSeries(pw => [...pw, ...data.results]));
  }, [popularWebSeriesPage])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${moviesInTheatrePage}`
    )
      .then((res) => res.json())
      .then((data) => setMoviesInTheatre(m => [...m, ...data.results]));
  }, [moviesInTheatrePage])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${latestWebSeriesPage}`
    )
      .then((res) => res.json())
      .then((data) => setLatestWebSeries(l => [...l, ...data.results]));
  }, [latestWebSeriesPage])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=95586a2cff275e69f05e2f2ddbee0211`
    )
      .then((res) => res.json())
      .then((data) => setUpcomingMovies(data.results));
  }, [])

 

  return (
    <>
      {
        searchData?.length ?

          <div className="movieList">
            <h3 style={{ padding: "1%" }}>
              Your Searched Movies
            </h3>
            <div className="movies">
              {searchData?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <Card item={item} />
                  </Fragment>
                );
              })}
            </div>
          </div >


          :

          <>
            <Carousel
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              interval={3000}
              useKeyboardArrows={true}
              infiniteLoop={true}
            >
              {upcomingMovies.map((item, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none", color: "aliceblue" }}
                    to={`/movie/${item.id}`}
                    key={index}
                  >
                    <div className="carousel">
                      <img
                        src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path
                          }`}
                        alt="MovieImage"
                        className="carouselImage"
                      />
                      <div className="carouselMovieDetails">
                        <div className="carouselMovieTitle">
                          {item && item.original_title}
                        </div>
                        <div className="carouselMovieReleseRating">
                          <span className="carouselMovieRelese">
                            {item && item.release_date}
                          </span>
                          <span className={getClass(item.vote_average)}>
                            {item && item.vote_average}
                            <AiFillStar
                              style={{ backgroundColor: "transparent" }}
                            />
                          </span>
                        </div>
                        <div className="carouselMovieOverview">
                          {item && item.overview}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>


            <div className="movieList">
              <h3 style={{ padding: "1%" }}>
                Trending Movies
              </h3>
              <div className="moviesHome">
                {trendingMovies.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <MovieCard item={item} />
                    </Fragment>
                  );
                })}
                <button className='nextBtn' onClick={() => { setTrendingMoviesPage(trendingMoviesPage + 1) }}><GrNext style={{ backgroundColor: "yellow", fontSize: "30px" }} /></button>
              </div>
            </div>



            <div className="movieList">
              <h3 style={{ padding: "1%" }}>
                Trending WebSeries
              </h3>
              <div className="moviesHome">
                {trendingWebSeries.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <WebSeriesCard item={item} />
                    </Fragment>
                  );
                })}
                <button className='nextBtn' onClick={() => { setTrendingWebSeriesPage(trendingWebSeriesPage + 1) }}><GrNext style={{ backgroundColor: "yellow", fontSize: "30px" }} /></button>
              </div>
            </div>

            <div className="movieList">
              <h3 style={{ padding: "1%" }}>
                Popular Movies
              </h3>
              <div className="moviesHome">
                {popularMovies.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <MovieCard item={item} />
                    </Fragment>
                  );
                })}
                <button className='nextBtn' onClick={() => { setPopularMoviesPage(popularMoviesPage + 1) }}><GrNext style={{ backgroundColor: "yellow", fontSize: "30px" }} /></button>
              </div>
            </div>

            <div className="movieList">
              <h3 style={{ padding: "1%" }}>
                Popular WebSeries
              </h3>
              <div className="moviesHome">
                {popularWebSeries.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <WebSeriesCard item={item} />
                    </Fragment>
                  );
                })}
                <button className='nextBtn' onClick={() => { setPopularWebSeriesPage(popularWebSeriesPage + 1) }}><GrNext style={{ backgroundColor: "yellow", fontSize: "30px" }} /></button>
              </div>
            </div>

            <div className="movieList">
              <h3 style={{ padding: "1%" }}>
                Movies In Theatre
              </h3>
              <div className="moviesHome">
                {moviesInTheatre.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <MovieCard item={item} />
                    </Fragment>
                  );
                })}
                <button className='nextBtn' onClick={() => { setMoviesInTheatrePage(moviesInTheatrePage + 1) }}><GrNext style={{ backgroundColor: "yellow", fontSize: "30px" }} /></button>
              </div>
            </div>

            <div className="movieList">
              <h3 style={{ padding: "1%" }}>
                Latest WebSeries
              </h3>
              <div className="moviesHome">
                {latestWebSeries.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <WebSeriesCard item={item} />
                    </Fragment>
                  );
                })}
                <button id='nextBtnLatestWebSeries' className='nextBtn' onClick={() => { setLatestWebSeriesPage(latestWebSeriesPage + 1) }}><GrNext style={{ backgroundColor: "yellow", fontSize: "30px" }} /></button>
              </div>
            </div>

          </>
      }
    </>
  )
}
