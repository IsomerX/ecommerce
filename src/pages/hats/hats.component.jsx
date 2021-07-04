import React from "react";
import { Link } from "react-router-dom";
const HatsPage = (props) => {
  console.log(props);
  return (
    <div className="hatspage">
      <Link to='/'>click this</Link>
      <button onClick={()=> props.history.push('/')}>clickedy click</button>
      <h1>hey, hats page {props.match.params.hatId}</h1>
    </div>
  );
};

export default HatsPage;
