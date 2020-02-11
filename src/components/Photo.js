import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 500px;
  min-width: 200px;
  max-height: 600px;
  object-fit: cover;
  margin: 20px;
`;

function Photo(props) {
  return (
    <div className="main-photo-container">
      <div className="image-container">
        <Image src={props.img} alt="photo of the day" />
        <p> Todays Photo</p>
      </div>

      <div className="image-container">
        <Image src="https://spacenews.com/wp-content/uploads/2019/07/Artemis-Lander-concept-art.jpg" />
        <p>Yesterdays photo</p>
      </div>
    </div>
  );
}

export default Photo;
