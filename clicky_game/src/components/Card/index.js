import React from "react";
import "./style.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="img-container">
            <img 
                alt="cartoon character"
                src={props.image}
            />
            </div>
        </div>
    );
}

export default Card;