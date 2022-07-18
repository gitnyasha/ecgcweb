import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Moment from "moment";

const Post = () => {
  const [post, setPost] = React.useState([]);
  const router = useRouter();
  const { id: id } = router.query;
  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/api/allposts/${id}`)
      .then((response) => {
        setPost(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={"row"}>
        <div className="section-title">
          <h2>{post.title}</h2>
        </div>
      </div>
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-left-sidebar">
                <BlogSidebar />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="blog-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-blog">
                        <p>{post.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Post;
