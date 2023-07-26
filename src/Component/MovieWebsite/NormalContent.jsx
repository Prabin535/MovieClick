import React from 'react';

export default function NormalContent() {
  return (
    <>
        <div className="searchSection">
                <div className="searchContent">
                <div className="titleBar">
                  <h2 className="title1">Welcome to Movie Click</h2>
                  <h4 className="title2">
                    Millions of movies and web series to discover. Explore now.
                  </h4>
                </div>
                <div className="searchBar">
                  <input
                    type="text"
                    placeholder="Search for movie,web series or a person..."
                    name=""
                    id=""
                    className="searchInputTag"
                  />
                  <button className="searchBtn">Search21111</button>
                </div>
                </div>
              </div>

              {/* <div className="content">
                <div className="cards">
                  <Link to="/NowPlaying" id="contents">
                    Now Playing
                  </Link>
                </div>
                <div className="cards">
                  <Link to="/PopularMovies" id="contents">
                    Popular Movies
                  </Link>
                </div>
                <div className="cards">
                  <Link to="/UpcommingMovies" id="contents">
                    Upcomming Movies
                  </Link>
                </div>
                <div className="cards">
                  <Link to="/LatestShows" id="contents">
                  Latest Shows
                  </Link>
                </div>
                <div className="cards">
                  <Link to="/PopularShows" id="contents">
                    Popular Shows
                  </Link>
                </div>
                <div className="cards">
                  <Link to="/BestofSuperheroes" id="contents">
                    Best of Superheroes
                  </Link>
                </div>
              </div> */}
    </>
  )
}
