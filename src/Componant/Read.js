import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";

const Read = () => {
  const [data, setdata] = useState([]);
  const [value, setValue] = useState();
  const [sortvalue, setSortValue] = useState();
  const [currentpage, setCorrentpage] = useState(0);
  // const [pagelimit] = useState(4);
  const sortOptions = ["name", "address", "email", "mobile", "status"];
  const [darkTheme, setDarktheme] = useState();

  useEffect(() => {
    userData(0,4,0);
  },[]);

  const userData = async () => {
    return await axios
      .get(`http://localhost:4000/users`)
      .then((res) => {
        setdata(res.data);
        setCorrentpage(currentpage + 1);
      })
      .catch((err) => console.log(err));
  };
  console.log("data", data);

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:4000/users?q=${value}`)
      .then((res) => {
        setdata(res.data);
        setValue("");
        toast.success("Searching Data")
      })
      .catch((err) => console.log(err));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    toast.warning("Redirectting Page")
    userData();
  };
  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:4000/users?_sort=${value}&_order=asc`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleFilter = async (value) => {
    return await axios
      .get(`http://localhost:4000/users?status=${value}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  const pagination = () => {
    
  };

  const handleDelete = (id) => {
    console.log("id is : ", id);
    axios.delete(`http://localhost:4000/users/${id}`).then(() => {
      userData();
    });
    toast.error("delete successfull");
  };

  const toLocalStorage = (id, name, email, mobile, address, status) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("address", address);
    localStorage.setItem("status", status);
  };
  return (
    <>
      <MDBContainer>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "500px",
            alignContent: "center",
          }}
          className="d-flex mb-3"
          onSubmit={handleSearch}
        >
          <input
            className="form-control"
            placeholder="Search Name.."
            aria-label="Search"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <MDBBtnGroup>
            <MDBBtn color="warning" type="submit">
              Search
            </MDBBtn>
            <MDBBtn color="danger" onClick={handleReset}>
              Reset
            </MDBBtn>
          </MDBBtnGroup>
        </form>
        <h2>Pagination Missing</h2>
        <div>
          <MDBRow>
            <MDBCol size="12">
              <MDBBtn color="warning">
                <Switch
                  checked={darkTheme}
                  onClick={() => {
                    if (darkTheme === "table-dark") setDarktheme("");
                    else setDarktheme("table-dark");
                  }}
                />
              </MDBBtn>
              <MDBTable className={`${darkTheme}`}>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Sr.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Status</th>
                    <th>Operations</th>
                    <th>
                      <Link to="/create">
                        <MDBBtn color="warning">Add New User</MDBBtn>
                      </Link>
                    </th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody className="align-center mb-0">
                    tr
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Data Found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody style={{ backgroundColor: "pink" }}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.address}</td>
                        <td>{item.status}</td>
                        <td>
                          <MDBBtn
                            color="danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            <DeleteIcon />
                          </MDBBtn>
                        </td>
                        <td>
                          <Link
                            to="/update"
                            onClick={() =>
                              toLocalStorage(
                                item.id,
                                item.name,
                                item.email,
                                item.mobile,
                                item.address,
                                item.status
                              )
                            }
                          >
                            {" "}
                            <MDBBtn>
                              <UpdateIcon />
                            </MDBBtn>
                          </Link>
                        </td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBRow>
          <MDBCol size="4">
            <h5>Sort by :</h5>
            <select
              style={{ width: "50%", borderRadius: "2px", height: "35px" }}
              onChange={handleSort}
              value={sortvalue}
            >
              <option>Please Select Value</option>
              {sortOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </MDBCol>

          <MDBCol size="4">
            <div>{pagination()}</div>
          </MDBCol>

          <MDBCol size="4">
            <h4>Filter by Status</h4>
            <MDBBtnGroup>
              <MDBBtn color="info" onClick={() => handleFilter("Open")}>
                Open
              </MDBBtn>
              <MDBBtn color="warning" onClick={() => handleFilter("Working")}>
              Working
              </MDBBtn>
              <MDBBtn color="info" onClick={() => handleFilter("Done")}>
              Done
              </MDBBtn>
              <MDBBtn color="warning" onClick={() => handleFilter("OverDue")}>
                Overdue
              </MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
  );
};

export default Read;
