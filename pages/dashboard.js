import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";

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
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Welcome {user.name}</h1>
              </div>

              <div className="row">
                <div className="col-xl-4 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Website Views (Monthly)
                          </div>
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Blog Posts
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            0
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Forms
                          </div>
                          <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                              <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                0
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SSRProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
