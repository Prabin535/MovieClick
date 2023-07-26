import React from "react";
import { useEffect, useState, Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RingLoader from "react-spinners/RingLoader";
import NormalContent from "./NormalContent";
import PaidContent from "./PaidContent";

const override = { margin: "250px auto" };

const Home = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, [])
  

  

  return (
    <>
      {sessionStorage.user ? (
        <>
          {loading ? (
            <div className="contentLogin">
              <NormalContent/>
              <PaidContent/>
            </div>
          ) : (
            <RingLoader
              color="yellow"
              cssOverride={override}
              loading
              size={100}
            />
          )}
        </>
      ) : (
        <div className="contentLogin">
          <NormalContent/>
          </div>
      )}
    </>
  );
};

export default Home;
