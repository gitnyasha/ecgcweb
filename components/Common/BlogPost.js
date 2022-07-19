import React from "react";
import Link from "next/link";
import axios from "axios";
import Moment from "moment";

const BlogPost = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/allposts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  }, []);

  const postList = posts.map((post) => (
    <div className="col-lg-6" key={post.id}>
      <div className="single-blog">
        <Link href="#">
          <a>
            <img src="/images/blog/newsletter.jpg" alt="Image" />
          </a>
        </Link>

        <div className="blog-content">
          <ul>
            <li>{Moment(post.created_at).format("MMMM Do YYYY")} </li>
            <li>
              <Link href="#">
                <a>By Admin</a>
              </Link>
            </li>
          </ul>

          <Link href={`blog-details?id=${post.id}`}>
            <a>
              <h3>{post.title}</h3>
            </a>
          </Link>

          <Link href="#">
            <a className="read-more">
              Read More <i className="bx bx-plus" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="blog-area">
      <div className="container">
        <div className="row">
          {postList}
          <div className="col-lg-12">
            <div className="page-navigation-area">
              <ul className="pagination">
                <li className="page-item">
                  <Link href="#">
                    <a className="page-link page-links">
                      <i className="bx bx-chevrons-left"></i>
                    </a>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link href="#">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </Link>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="bx bx-chevrons-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
