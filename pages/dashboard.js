import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DashboardNavbar from "../components/dashboard-navbar";
import Posts from "../components/dashboard/posts";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SSRProvider } from "react-bootstrap";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShow(false);

  const login = () => {
    setLoggedIn(true);
  };

  return (
    <SSRProvider>
      <DashboardNavbar />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <h3>Home</h3>
        </Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="posts" title="Blog Posts">
          <h3>Blog Posts</h3>
          <Button variant="primary" onClick={handleShow}>
            Create Post
          </Button>
          <Posts />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <form method="post" enctype="multipart/form-data">
              <Modal.Body>
                <div class="form-group my-1">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    class="form-control"
                    id="title"
                    required
                  />
                </div>
                <div class="form-group my-1">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    name="body"
                    id="editor"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="secondary" onClick={handleSubmit}>
                  Submit Post
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </Tab>
      </Tabs>
    </SSRProvider>
  );
};

export default Dashboard;
