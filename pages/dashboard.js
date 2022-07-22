import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./dashboard/Sidebar";

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = React.useState([]);

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
      } else {
        Router.push("/sign-in");
      }
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <SSRProvider>
            <h1>Dashboard - {user.name}</h1>
          </SSRProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
