import React from "react";
import "./style.css";

const Title = props => {
  return <div className="header">
            <div className="title">{props.children}</div>
            <div className="scores">
              Score: {props.score} Highscore:{props.highscore}
            </div>
  </div>
}
export default Title;