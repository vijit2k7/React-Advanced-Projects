import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {WatchListContext} from "../App";

const Header = () => {

  const useContextValue=useContext(WatchListContext);
  console.log("use header context value",useContextValue);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;