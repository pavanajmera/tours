import React from "react";
import Tour from "./Tour";

const Tours = ({tours, removeTour}) => {
    // console.log(tours);
    return(
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour)=>{
                    const {id, name, info, image, price } = tour;
                    return(
                        <Tour key={id} {...tour} removeTour = {removeTour}/>
                    )
                })}
            </div>
        </section>
    );
};

export default Tours;
