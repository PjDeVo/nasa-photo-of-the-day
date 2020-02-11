import React from "react";
import { Button } from "reactstrap";

const Buttons = props => {
  return (
    <div className="buttons-container">
      <Button color="success">Click Here To Change Photo to HD</Button>
      <Button color="success"> Click Here To View Another Photo</Button>
      <Button color="success"> Click Here to Do Something Else</Button>
    </div>
  );
};

export default Buttons;
