import React from "react";

const Card = (props) => {
  const { title, description, btnTitle, imgUrl } = props.objdata;
  return (
    <div className="card">
      <div className="content">
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p id="anchor">
          <div>{btnTitle}</div> <div>&#8594;</div>
        </p>
      </div>
      <div className="img">
        <img src={imgUrl} alt="img" />
      </div>
    </div>
  );
};

export default Card;
