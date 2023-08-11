import React from "react";

export default function NormalContent() {
  return (
    <>
      {sessionStorage.user ? (
        " "
      ) : (
        <div className="searchSection">
          <div className="searchContent">
            <div className="titleBar">
              <h2 className="title1">Welcome to Movie Click</h2>
              <h4 className="title2">
                Millions of movies and web series to discover. Explore now.
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
