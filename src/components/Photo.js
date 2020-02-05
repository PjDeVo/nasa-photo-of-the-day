import React, { useEffect, useState } from "react";
import axios from "axios";

function Photo(props) {
  return (
    <div className="main-photo-container">
      <img src={props.img} alt="photo of the day" />
    </div>
  );
}

export default Photo;
