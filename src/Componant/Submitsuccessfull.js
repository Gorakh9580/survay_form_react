import React from "react";
import Button from "@mui/material/Button";

const Submitsuccessfull = () => {
  return (
    <div className="success ">
      <h1 className="h1">Your Record Has Been Submitsuccessfully Added</h1>
      <h2>Check Your Record</h2>
      <Button variant="contained" color="success" href="/read">
        Click Here
      </Button>
   <h2 className="mt-4"> or</h2>
      <h2 className="mt-4">Add New Record</h2>
      <Button variant="contained" color="warning" href="/create">
        Click Here
      </Button>
    </div>
  );
};

export default Submitsuccessfull;
