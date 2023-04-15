import React, { useState } from "react";

const Tour = ({id, name, info, image, price, removeTour }) => {
  // console.log(name)
  const [readMore, setReadMore] = useState(false);
  // console.log(info.substring(0, 20));
  return (
    <article className="single-tour">
        <img src={image} alt={name} className="img"/>
        <span className="tour-price">${price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>{ readMore ? info : `${info.substring(0, 200)}...`}
              <button type="button" className="info-btn" onClick={() => setReadMore(!readMore) }>
                {readMore ? ' show less' : 'read more'}
              </button>
            </p>
            <button type="button" className="btn btn-block delete-btn" onClick={()=>removeTour(id)}>
                not interested
            </button>
        </div>
    </article>
  );
};

export default Tour;
