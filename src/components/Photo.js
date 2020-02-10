import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 500px;
  min-width: 200px;
  max-height: 600px;
  object-fit: cover;
`;

function Photo(props) {
  return (
    <div className="main-photo-container">
      <Image src={props.img} alt="photo of the day" />
    </div>
  );
}

export default Photo;
