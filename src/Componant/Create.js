import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField
} from "@mui/material";

const Create = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    status: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !user.name ||
        !user.email ||
        !user.mobile ||
        !user.address ||
        !user.status
      ) {
        navigate("/submit");
      } else {
        await axios.post(`http://localhost:4000/users`, {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          address: user.address,
          status: user.status,
        });
      }
    } catch {
      console.log("Something is Went Wrong");
    }
    setUser({ name: "", email: "", mobile: "", address: "", status: "" });
  };
  return (
    <>
    
    <div className="action">
      <MDBContainer>
        <form className=" form pt-4" onSubmit={handleSubmit}>
       <h2 className="paragraph">Register Your Work Business For Growth </h2>
          <div className="name pt-5 ">
            <MDBRow size="12">
              <MDBCol size="3"></MDBCol>
              <MDBCol size="6">
                <div className="input">
                <h1> 1. What Is Your Name ?</h1>
                <TextField
                  required
                   fullWidth
                  variant="standard"
                  name="name"
                  type="text" 
                  wrapperClass="mb-4"
                  label="Enter Your Name Here ?"
                  onChange={handleChange}/>
                  <span>Required*</span>
                </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="email pt-4">
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="6">
              <div className="input">
              <h1> 2. What Is Your Email ?</h1>
                <TextField
                required
                fullWidth
                  name="email"
                  type="email"
                  wrapperClass="mb-4"
                   label="Enter Your Email Here ?"
                   variant="standard"
                  onChange={handleChange}
                />
                <span>Required*</span>
              </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="mobile pt-4">
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="6">
              <div className="input">
              <h1>What is Your Phone ?</h1>
                <TextField
                required
                   fullWidth
                  variant="standard"
                  name="mobile"
                  type="tel"
                  wrapperClass="mb-4"
                  label="Enter Your Phone Here ?"
                  onChange={handleChange}
                />
                <span>Required*</span>
              </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="address pt-4">
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="6">
              <div className="input">
              <h1>What is your Address ?</h1>
                <TextField
                required
                   fullWidth
                  variant="standard"
                  name="address"
                  type="text"
                  wrapperClass="mb-4"
                  label="Enter Your Address Here ?"
                  onChange={handleChange}
                  
                />
              <span>Required*</span>
              </div>
               </MDBCol>
            </MDBRow>
          </div>

          <div className="status pt-4">
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="6">
              <div className="input">
              <h1> What is Your Status<strong> (Choose)</strong></h1>
                <FormControl>
                  <RadioGroup
                  required
                    name="status"
                    onChange={handleChange}
                  >
                   <div  className="d-flex">
                   <FormControlLabel
                      value="Open"
                      control={<Radio />}
                      label="Open"
                    />
                    <FormControlLabel
                      value="Working"
                      control={<Radio />}
                      label="Working"
                    />
                     <FormControlLabel
                      value="Done"
                      control={<Radio />}
                      label="Done"
                    />
                     <FormControlLabel
                      value="Overdue"
                      control={<Radio />}
                      label="Overdue"
                    />
                   </div>
                  </RadioGroup>
                </FormControl>
              </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="button pt-4 pb-4">
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="6">
                <MDBBtn type="submit" className="mb-1" block color="success">
                  Add User
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </div>
        </form>
      </MDBContainer>
    </div>
    </>
  );
};

export default Create;
