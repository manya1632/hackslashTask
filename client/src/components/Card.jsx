import React from 'react'

const Card = (props) => {
  const {title, description, btnTitle , btnUrl, imgUrl}=props.objdata;
   return (
    <div className="card">
        <div className="content">
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
            <a href={btnUrl}>{btnTitle} &#8594;</a>
        </div>
        <div className="img">
            <img src={imgUrl} alt="img" />
        </div>
    </div>
  )
}

export default Card