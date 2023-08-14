import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { disapatchdata, loginSuccess } from "../../Redux/Action";
import { RxCross1 } from 'react-icons/rx';

// import { useContext } from "react";
// import { userContext } from "../Api/Firebase/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Api/FirebaseApi";

export default function Navbar() {
  let dispatch = useDispatch()
  const user = useSelector(state=>state.combineReducersdata.userName);
  const userName = sessionStorage.getItem('userName');
  const [datachange, setDatachange] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  async function logout() {
    await signOut(auth);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userName");
    toast.warning("Logout Successfully");
    window.location.replace("http://localhost:3000/");
  }

  const searchproduct = (search) => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=95586a2cff275e69f05e2f2ddbee0211`
      )
        .then((res) => res.json())
        .then((data) => dispatch(disapatchdata(data.results)));
  }
  useEffect(() => {
    searchproduct(datachange)
  }, [datachange])
  useEffect(() => {
    searchproduct(datachange)
  }, [])
  useEffect(() => {
    if(user){
      setLoggedIn(true)
    }
    else{
      setLoggedIn(false)
    }
  }, [user]);
  useEffect(()=>{
    dispatch(loginSuccess(userName));
  },[])

  return (
    <>
      {loggedIn ? (
        <div id="header">
          <div className="headerPart1">
            <div className="nav-logo">
              <Header />
            </div>
            <div className="nav-searchBar">
              <input
                type="text"
                placeholder="Search for movie,web series or a person..."
                value={datachange}
                className="nav-searchInputTag"
                onChange={(e)=>setDatachange(e.target.value)}
              />
              <RxCross1 onClick={()=>setDatachange('')} size={25} style={{position:'absolute',right:'10px',backgroundColor: 'transparent', display: `${datachange? 'block':'none'}`}}/>
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
                <Link className="menuContentBtn" style={{width:'max-content',paddingInline:'10px'}}>
                  {user}
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
