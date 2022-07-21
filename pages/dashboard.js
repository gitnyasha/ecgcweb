import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import DashboardNavbar from "../components/dashboard-navbar";
// import Posts from "../components/dashboard/posts";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { SSRProvider } from "react-bootstrap";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = React.useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShow(false);

  const login = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    let headersList = {
      Authorization: "Bearer 13|Vy1h0SAVILE2jGAEfrrjSZiv9XJq2CXtbcydHeHz",
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: "http://localhost:8000/api/auth/profile",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data.user);
        setUser(response.data.user);
        login();
      }
    });
  }, []);

  if (!loggedIn) {
    Router.push("/sign-in");
  }

  return (
    <h1>Dashboard - {user.name}</h1>

    // <SSRProvider>
    //   <DashboardNavbar />
    //   <Tabs
    //     defaultActiveKey="profile"
    //     id="uncontrolled-tab-example"
    //     className="mb-3"
    //   >
    //     <Tab eventKey="home" title="Home">
    //       <h3>Home</h3>
    //     </Tab>
    //     <Tab eventKey="profile" title="Profile"></Tab>
    //     <Tab eventKey="posts" title="Blog Posts">
    //       <h3>Blog Posts</h3>
    //       <Button variant="primary" onClick={handleShow}>
    //         Create Post
    //       </Button>
    //       <Posts />
    //       <Modal show={show} onHide={handleClose}>
    //         <Modal.Header closeButton>
    //           <Modal.Title>Modal heading</Modal.Title>
    //         </Modal.Header>
    //         <form method="post" enctype="multipart/form-data">
    //           <Modal.Body>
    //             <div class="form-group my-1">
    //               <label for="title">Title</label>
    //               <input
    //                 type="text"
    //                 name="title"
    //                 class="form-control"
    //                 id="title"
    //                 required
    //               />
    //             </div>
    //             <div class="form-group my-1">
    //               <label for="description" class="form-label">
    //                 Description
    //               </label>
    //               <textarea
    //                 class="form-control"
    //                 name="body"
    //                 id="editor"
    //                 rows="3"
    //                 required
    //               ></textarea>
    //             </div>
    //           </Modal.Body>
    //           <Modal.Footer>
    //             <Button variant="secondary" onClick={handleClose}>
    //               Close
    //             </Button>
    //             <Button variant="secondary" onClick={handleSubmit}>
    //               Submit Post
    //             </Button>
    //           </Modal.Footer>
    //         </form>
    //       </Modal>
    //     </Tab>
    //   </Tabs>
    // </SSRProvider>
  );
};

export default Dashboard;
