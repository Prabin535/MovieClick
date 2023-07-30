import React, { Fragment, useEffect, useState } from "react";
import Card from "./MovieCard";
import { useSelector } from 'react-redux';
import LogIn from "./LogIn";

const Movies = () => {
  let [movies, setMovies] = useState([]);
  let [page,setPage]=useState(1);
  let [searchData, setSearchData] = useState([]);

  let filteredData2 = useSelector(state => state.combineReducersdata.searcheddata) 
  function nextPage(){
    setPage(page+1);
  }  
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setMovies([...movies,...data.results]));
  }, [page,movies]);

  useEffect(()=>{
    setSearchData(filteredData2)
  },[filteredData2])


  return (
    <>
    {searchData?.length ?

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
      {sessionStorage.user ? (
        <div className="movieList">
        <h3>Popular Movies</h3>
        <div className="movies">
          {movies.map((item, index) => {
            return (
              <Fragment key={index}>
                <Card item={item} />
              </Fragment>
            );
          })}
        </div>
        <div className="button">
        <button onClick={nextPage} className="loadBtn">Load More</button>
        </div>
        
      </div>
      )
      :
      (
        <LogIn/>
      )}
      </>
}
    </>
  );
};

export default Movies;
