import React, { Fragment, useEffect, useState } from "react";
import WebSeriesCard from "./WebSeriesCard";
import { useSelector } from 'react-redux';
import LogIn from "./LogIn";
import Card from "./MovieCard";

const WebSeries = () => {
  
  let [webSeries, setWebSeries] = useState([]);
  let [searchData, setSearchData] = useState([]);
  let [page,setPage]=useState(1);
  function nextPage(){
    setPage(page+1);
  } 

  let filteredData2 = useSelector(state => state.combineReducersdata.searcheddata) 
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        return setWebSeries(w=>[...w,...data.results])
      });
  }, [page]);

  useEffect(()=>{
    setSearchData(filteredData2)
  },[filteredData2])

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
      {sessionStorage.user ? (
        <div className="movieList">
        <h3>Popular Shows</h3>
        <div className="movies">
          {webSeries.map((item, index) => {
            return (
              <Fragment key={index}>
                <WebSeriesCard item={item} />
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
      </>}
    </>
  );
}

export default WebSeries