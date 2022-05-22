import React from "react";

export default function Card(props) {
  return (
    <div class="img-card iCard-style1">
      <div className="card-content">
        <div className="card-image">
          <span className="card-title">{props.name}</span>
          <img src={props.url} />
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
          <a href="google.com">
            <span>Read Full</span>
          </a>
        </div>
      </div>
    </div>
  );
}
