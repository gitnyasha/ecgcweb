import React, { useState } from "react";
import Link from "next/link";
import Moment from "moment";
import { backend, uri } from "../../pages/api/api";
import parse from "html-react-parser";

const BoardOfDirectors = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  React.useEffect(() => {
    backend
      .get("/api/directors")
      .then((response) => {
        setPosts(response.data.directors);
      })
      .catch((error) => console.error(error));
  }, []);

  const postList = posts.map((post) => (
    <div className="col-lg-4 col-md-6" key={post.id}>
      <div className="single-blog single-director">
        <img
          src={uri + post.image}
          alt="Image"
          className="blog-fluid"
          height={300}
        />

        <div className="blog-content">
          <h3>{post.fullname}</h3>
          <h5>{post.title}</h5>
          <div className="wysiwyg">{parse(`${post.description}`)}</div>
        </div>
      </div>
    </div>
  ));

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
                  <h3>Coming Soon</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
