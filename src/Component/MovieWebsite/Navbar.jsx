import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useContext } from "react";

// import { useContext } from "react";
// import { userContext } from "../Api/Firebase/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Api/Firebase/FirebaseApi";
import { searchItem } from "../../Redux/Action";

export default function Navbar() {
  const [datachange, setDatachange] = useState()
  let dispatch = useDispatch()
  // let user = useContext(userContext);
  async function logout() {
    await signOut(auth);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userName");
    toast.warning("Logout Successfully");
    window.location.replace("http://localhost:3000/");
  }
  function searchData() {
    dispatch(searchItem(datachange))
  }
  useEffect(() => {
    searchData()
  }, [datachange])
  const change = (e) => {
    setDatachange(e.target.value)
  }
  return (
    <>
      {/* {console.log(sessionStorage.user)} */}

      {sessionStorage.user ? (
        <div id="header">
          <div className="headerPart1">
            <div className="nav-logo">
              <Header />
            </div>


            <div className="nav-searchBar">
              <input
                type="text"
                placeholder="Search for movie,web series or a person..."
                name=""
                id=""
                className="nav-searchInputTag"
                onChange={change}
              />
              <button className="nav-searchBtn">Search</button>
            </div>
          
          </div>

          <div className="headerPart2">

            <div className="menubar1">
              <span>
                <Link to="/Movies" className="menuContent">
                  Movies
                </Link>
              </span>
              <span>
                <Link to="/WebSeries" className="menuContent">
                  Web Series
                </Link>
              </span>
            </div>
            <div className="menubar2">
           
              <span>
                <Link className="menuContentBtn">
                  {sessionStorage.userName}
                </Link>
              </span>
              <span>
                <Link onClick={logout} className="menuContentBtn">
                  Logout
                </Link>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div id="header">
          <div className="headerPart1">
            <Header />
          </div>
          <div className="headerPart2">
            <div className="menubar2">
         
              <span>
                <Link to="/SignUp" className="menuContentBtn">
                  SignUp
                </Link>
              </span>
              <span>
                <Link to="/LogIn" className="menuContentBtn">
                  LogIn
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
