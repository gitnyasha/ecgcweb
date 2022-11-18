import React from "react";
import Link from "next/link";
import Moment from "moment";
import { backend, uri } from "../../pages/api/api";
import Pagination from "react-bootstrap/Pagination";

const BlogPost = () => {
  const [posts, setPosts] = React.useState([]);

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  React.useEffect(() => {
    backend
      .get("/api/allposts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  }, []);

  const postList = posts.map((post) => (
    <div className="col-lg-6" key={post.id}>
      <div className="single-blog">
        <Link href={`/post/${post.slug}`}>
          <a>
            <img src={post.image} alt="Image" className="blog-fluid" />
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

  return (
    <div className="blog-area">
      <div className="container">
        <div className="row">
          {postList}
          {/* <div className="col-lg-12">
            <Pagination size="lg">{items}</Pagination>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
