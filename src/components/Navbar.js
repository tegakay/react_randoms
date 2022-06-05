import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <header>
        <div className="logo">
          <h2>Imdb Search</h2>
          </div>
        <nav> 
          <ul className="nav-bar">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/">Top 10</Link></li>
            <li><Link to ="/movies">Anime</Link></li>
            <li><Link to ="/movies">Random</Link></li>
            </ul>
          </nav>
          <button className="search">Search</button>
      </header>
    )
}