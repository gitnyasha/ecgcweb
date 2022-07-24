import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Topbar from "./Topbar";
import { uri } from "../api/api";

const Users = () => {
  const [show, setShow] = useState(false);
  const [user, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
      "Access-Control-Allow-Origin": uri + "/api",
    };

    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("role", role);

    let bodyContent = formdata;
    let reqOptions = {
      url: uri + "/api/users",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      console.log(response.data);
      setShow(false);
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
      alert("User Created");
    });
  };

  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/users",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        setUsers(response.data.users);
      }
    });
  }, []);

  const users = user?.map((u) => (
    <tr key={u.id}>
      <td>{u.id}</td>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.role}</td>
    </tr>
  ));

  return (
    <Container fluid>
      <Row>
        <Topbar />
      </Row>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <SSRProvider>
            <h3>Blog users</h3>
            <Button variant="primary" onClick={handleShow}>
              Create user
            </Button>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>{users}</tbody>
              </table>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleSubmit}>
                <Modal.Body>
                  <div class="form-group my-1">
                    <label for="title">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      class="form-control"
                      id="title"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="form-group my-1">
                    <label for="title">Email</label>
                    <input
                      type="email"
                      value={email}
                      class="form-control"
                      id="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group my-1">
                    <label for="title">Password</label>
                    <input
                      type="password"
                      value={password}
                      class="form-control"
                      id="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group my-1">
                    <label for="title">Role</label>
                    <select
                      class="form-control"
                      id="role"
                      required
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select role</option>
                      <option value="admin">Admin</option>
                      <option value="editor">Editor</option>
                    </select>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="secondary" onClick={handleSubmit}>
                    Submit user
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          </SSRProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
