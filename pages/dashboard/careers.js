import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Moment from "moment";
import Topbar from "./Topbar";
import { uri } from "../api/api";

const Careers = () => {
  const [show, setShow] = useState(false);
  const [post, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id, e) => {
    e.preventDefault();
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
      "Access-Control-Allow-Origin": uri + "/api",
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + `/api/careers/${id}`,
      method: "DELETE",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      console.log(response.data);
      alert("Post Deleted");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
      "Access-Control-Allow-Origin": uri + "/api",
    };
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);

    let bodyContent = formdata;
    let reqOptions = {
      url: uri + "/api/careers",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };
    axios.request(reqOptions).then(function(response) {
      console.log(response.data);
      setShow(false);
      setTitle("");
      setDescription("");
      alert("Job post Added");
    });
  };

  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
      "Access-Control-Allow-Origin": uri + "/api",
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/careers",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data.careers);
      }
    });
  }, []);

  const posts = post?.map((p) => (
    <tr key={p.id}>
      <td>{p.title}</td>
      <td>{p.description}</td>
      <td>{Moment(p.created_at).format("MMMM Do YYYY")}</td>
      <td>
        <Button
          onClick={(e) => handleDelete(p.id, e)}
          className="btn btn-danger"
        >
          Delete
        </Button>
      </td>
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
            <h3>Careers</h3>
            <Button variant="primary" onClick={handleShow}>
              Post Job
            </Button>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Posted</th>
                  </tr>
                </thead>
                <tbody>{posts}</tbody>
              </table>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleSubmit}>
                <Modal.Body>
                  <div class="form-group my-1">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      value={title}
                      class="form-control"
                      id="title"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div class="form-group my-1">
                    <label for="description" class="form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      value={description}
                      id="editor"
                      rows="3"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="secondary" type="submit">
                    Submit Job Post
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

export default Careers;
