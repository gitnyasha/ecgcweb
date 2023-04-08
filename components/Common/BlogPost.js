import React, { useState } from "react";
import Link from "next/link";
import Moment from "moment";
import { backend, uri } from "../../pages/api/api";

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(posts.length / recordsPerPage);

  const postList = currentRecords.map((post) => (
    <div className="col-lg-6" key={post.id}>
      <div className="single-blog single-director">
        <Link href={`/post/${post.slug}`}>
          <a>
            <img src={uri + post.image} alt="Image" className="blog-fluid" />
          </a>
        </Link>

        <div className="blog-content">
          <ul>
            <li>{Moment(post.created_at).format("MMMM Do YYYY")} </li>
            <li>
              <Link href={`/post/${post.slug}`}>
                <a>By Admin</a>
              </Link>
            </li>
          </ul>

          <Link href={`/post/${post.slug}`}>
            <a>
              <h3>{post.title}</h3>
            </a>
          </Link>

          <Link href={`/post/${post.slug}`}>
            <a className="read-more">
              Read More <i className="bx bx-plus" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));

  React.useEffect(() => {
    backend
      .get("/api/allposts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="blog-area">
      <div className="container">
        <div className="row">
          {postList.length > 0 ? (
            postList
          ) : (
            <div className="col-lg-12">
              <div className="single-blog">
                <div className="blog-content">
                  <h3>No Posts Found</h3>
                </div>
              </div>
            </div>
          )}
          <div className="col-lg-12">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPost;
