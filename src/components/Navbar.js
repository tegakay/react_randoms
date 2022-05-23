import React from "react";

export default function Navbar(props){
    return(
        <header>
        <div className="logo">
          <h2>Imdb Search</h2>
          </div>
        <nav> 
          <ul className="nav-bar">
            <li><button onClick={props.show}>Home</button></li>
            <li><button onClick={props.show}>Top 10</button></li>
            <li><button onClick={props.show}>Anime</button></li>
            <li><button onClick={props.show}>Random</button></li>
            </ul>
          </nav>
          <button className="search">Search</button>
      </header>
    )
}