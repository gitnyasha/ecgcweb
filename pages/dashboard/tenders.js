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
import Link from "next/link";

const Tenders = () => {
  const [show, setShow] = useState(false);
  const [post, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date_posted, setDatePosted] = useState("");
  const [deadline, setDeadline] = useState("");
  const [document, setDocument] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id, e) => {
    e.preventDefault();
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: `http://localhost:8000/api/tenders/${id}`,
      method: "DELETE",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      console.log(response.data);
      alert("Tender Deleted");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
      "Content-Type": "multipart/form-data",
    };

    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("deadline", deadline);
    formdata.append("date_posted", date_posted);
    formdata.append("document", document);

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/tenders",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      console.log(response.data);
      setShow(false);
      setTitle("");
      setDescription("");
      setDatePosted("");
      setDeadline("");
      setDocument(null);
      alert("Tender Added");
    });
  };

  const handleFileSelect = (event) => {
    setDocument(event.target.files[0]);
  };

  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/tenders",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data.tenders);
      }
    });
  }, []);

  const posts = post.map((p) => (
    <tr key={p.id}>
      <td>{p.title}</td>
      <td>{Moment(p.date_posted).format("MMMM Do YYYY")}</td>
      <td>{Moment(p.deadline).format("MMMM Do YYYY")}</td>
      <td>
        <Link href={p.document}>
          <a>Download</a>
        </Link>
      </td>
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
            <h3>Tenders & RFQs</h3>
            <Button variant="primary" onClick={handleShow}>
              Create Tender
            </Button>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Issued</th>
                    <th>Deadline</th>
                    <th>Document</th>
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
                  <div class="form-group my-1">
                    <label for="deadline">Deadline</label>
                    <input
                      type="date"
                      value={deadline}
                      class="form-control"
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </div>
                  <div class="form-group my-1">
                    <label for="deadline">Issued</label>
                    <input
                      type="date"
                      value={date_posted}
                      class="form-control"
                      onChange={(e) => setDatePosted(e.target.value)}
                    />
                  </div>
                  <div class="form-group my-1">
                    <label for="file">File</label>
                    <input
                      type="file"
                      class="form-control"
                      onChange={handleFileSelect}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="secondary" type="submit">
                    Submit Tender
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

export default Tenders;
