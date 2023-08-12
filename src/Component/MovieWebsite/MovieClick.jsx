import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./MovieClick.css";
import Home from "./Home";
import Movies from "./Movies";
import WebSeries from "./WebSeries";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../Api/Firebase/AuthContext";
import BestofSuperheroes from "./BestofSuperheroes";

import CreateProduct from "./Product/CreateProduct";
import NowPlaying from "./NowPlaying";
import UpcommingMovies from "./UpcommingMovies";
import LatestShows from "./LatestShows";

function MovieClick() {
  return (
    <Router>
      <AuthContext>
      <Navbar />
        <div id="section1">
          <ToastContainer pauseOnHover />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/NowPlaying" element={<NowPlaying />}></Route>
            <Route path="/PopularShows" element={<WebSeries />}></Route>
            <Route
              path="/UpcommingMovies"
              element={<UpcommingMovies />}
            ></Route>
            <Route path="/LatestShows" element={<LatestShows />}></Route>
            <Route path="/PopularMovies" element={<Movies />}></Route>
            <Route
              path="/BestofSuperheroes"
              element={<BestofSuperheroes />}
            ></Route>

            <Route path="/Movies" element={<Movies />}></Route>

            <Route path="/WebSeries" element={<WebSeries />}></Route>

            <Route path="/UploadProduct" element={<CreateProduct />}></Route>

            <Route path="/SignUp" element={<SignUp />}></Route>

            <Route path="/LogIn" element={<LogIn />}></Route>
          </Routes>
        </div>
      </AuthContext>
    </Router>
  );
}

export default MovieClick;
