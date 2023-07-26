import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

const override = { margin: "150px auto" , backgroundColor:"transparent" };

export default function Card(props) {
  let item = props.item;
  let [loading, setLoading] = useState(true);
  function getClass(rating) {
    if (rating >= 7) {
      return "movieRatingGreen";
    } else if (rating >= 6) {
      return "movieRatingOrange";
    } else {
      return "movieRatingRed";
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="movieCards">
          <DotLoader color="blue" cssOverride={override} loading size={60} />
        </div>
      ) : (
        <Link
          style={{ textDecoration: "none", color: "yellow" }}
          to={`/movie/${item.id}`}
        >
          <div className="movieCards">
            <img
              src={`https://image.tmdb.org/t/p/original${
                item && item.poster_path
              }`}
              alt="MovieImage"
              className="movieImage"
            />
            <div className="movieDetails">
              <div className="movieTitle">{item && item.original_name}</div>
              <div className="movieReleseRating">
                <span className="movieRelese">{item && item.first_air_date}</span>
                <span className={getClass(item.vote_average)}>
                  {item && Math.floor(item.vote_average*10)}%
                  {/* <AiFillStar style={{ backgroundColor: "transparent" }} /> */}
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
