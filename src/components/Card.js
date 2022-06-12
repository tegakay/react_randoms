import React from "react";
import {Link} from 'react-router-dom'

export default function Card(props) {
  //console.log(props)
  return (
    <div class="img-card ">
      <div className="card-content">
        <div className="card-image">
          <span className="card-title">{props.name}</span>
          <img src={props.url} alt="meme" />
        </div>

        <div className="card-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Image by{" "}
            <a href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451">
              Hans Braxmeier
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451">
              Pixabay
            </a>
          </p>
        </div>

        <div className="card-link">
          <Link to={`/movies/${props.id}`}>
          <span>Read Full</span>
          </Link>
            
          
        </div>
      </div>
    </div>
  );
}
