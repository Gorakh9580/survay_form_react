import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
    setAddress(localStorage.getItem("address"));
    setStatus(localStorage.getItem("status"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/users/${id}`, {
        id: id,
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        status: status,
      })
      toast.warning("Update Successfully")
      navigate("/read");
      
     
  };
  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className="pt-5" onSubmit={handleUpdate}>
            <MDBInput
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              wrapperClass="mb-4"
              id="form6Example1"
              label="Name"
            />
            <MDBInput
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              wrapperClass="mb-4"
              type="email"
              id="form6Example5"
              label="Email"
            />
            <MDBInput
              onChange={(e) => setMobile(e.target.value)}
              name="mobile"
              value={mobile}
              wrapperClass="mb-4"
              type="tel"
              id="form6Example6"
              label="Phone"
            />
            <MDBInput
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              value={address}
              wrapperClass="mb-4"
              id="form6Example4"
              label="Address"
            />
            <MDBInput
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              value={status}
              wrapperClass="mb-4"
              id="form6Example3"
              label="Status"
            />
            <MDBBtn className="mb-4" type="submit">
              Update User
            </MDBBtn>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </>
  );
};

export default Update;
