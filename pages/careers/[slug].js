import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "moment";
import { backend, uri } from "../api/api";
import parse from "html-react-parser";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const CareerDetails = () => {
  const [job, setJob] = React.useState([]);
  const router = useRouter();
  const { slug } = router.query;
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  React.useEffect(() => {
    backend
      .get(`/api/jobs/${slug}`)
      .then((response) => {
        setJob(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleApply = (e) => {
    e.preventDefault();

    let headersList = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": uri + "/api",
    };

    let formdata = new FormData();
    formdata.append("fullname", fullname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("resume", resume);
    formdata.append("dob", dob);
    formdata.append("job_id", job.id);
    formdata.append("gender", gender);
    formdata.append("idnumber", idnumber);
    formdata.append("experience", experience);
    formdata.append("education", education);

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "api/apply",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      console.log(response.data);
      if (response.status === 201) {
        setShow(false);
        setModal(true);
        setFullname("");
        setEmail("");
        setPhone("");
        setResume("");
        setDob("");
        setIdnumber("");
        setExperience("");
        setEducation("");
      } else {
        alert("Error submitting application");
      }
    });
  };

  if (job.length === 0) {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="spinner-area">
          <div className="spinner-box">
            <div className="lds-hourglass">Lodding...</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="blog-details-area ptb-100">
        <div className="container my-5">
          <div className="row my-5">
            <div className="col-lg-8 col-md-12 my-5">
              <div className="blog-details-desc">
                <h2>{job.title}</h2>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">
                          <a>{Moment(job.created_at).format("MMMM Do YYYY")}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={uri + job.document}>
                          <a>Download</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <br></br>
                  <div className="wysiwyg">{parse(`${job.description}`)}</div>
                  <Button variant="primary" onClick={handleShow}>
                    Apply Now
                  </Button>
                  <Alert
                    show={modal}
                    variant="success"
                    onClose={() => setModal(false)}
                    dismissible
                  >
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>Application submitted successfully.</p>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {job.title}</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="recipient-name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Phone:
              </label>
              <input
                type="number"
                className="form-control"
                id="recipient-name"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                ID Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                value={idnumber}
                onChange={(e) => setIdnumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Date of Birth:
              </label>
              <input
                type="date"
                className="form-control"
                id="recipient-name"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Gender:
              </label>
              <select
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Summary of Experience:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="recipient-name"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Summary of Qualifications
              </label>
              <textarea
                type="text"
                className="form-control"
                id="recipient-name"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Upload CV (pdf, doc, docx):
              </label>
              <input
                type="file"
                className="form-control"
                id="recipient-name"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleApply}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default CareerDetails;
