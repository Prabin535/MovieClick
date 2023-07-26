import React, { Fragment, useEffect, useState } from "react";
import WebSeriesCard from "./WebSeriesCard";
import LogIn from "./LogIn";

const WebSeries = () => {
  let [webSeries, setWebSeries] = useState([]);
  let [page,setPage]=useState(1);
  function nextPage(){
    setPage(page+1);
  }  
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=95586a2cff275e69f05e2f2ddbee0211&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        return setWebSeries(w=>[...w,...data.results])
      });
  }, [page]);

  console.log(webSeries);

  return (
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
      
    </>
  );
}

export default WebSeries