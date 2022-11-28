import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import Comments from "../../components/Blog/comments";
import { useRouter } from "next/router";
import Moment from "moment";
import { backend, uri } from "../api/api";
import parse from "html-react-parser";

const BlogDetails = () => {
  const [post, setPost] = React.useState([]);
  const router = useRouter();
  const { slug } = router.query;

  React.useEffect(() => {
    backend
      .get(`/api/post/${slug}`)
      .then((response) => {
        setPost(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (post.length === 0) {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <br />
        {/* spinner */}
        <div className="spinner-area">
          <div className="spinner-box">
            <div className="lds-hourglass"></div>
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
                <h2>{post.title}</h2>

                <div className="article-image">
                  <img
                    src={post.image}
                    alt="blog image"
                    className="blog-fluid"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">
                          <a>
                            {Moment(post.created_at).format("MMMM Do YYYY")}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">
                          <a>Admin</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <br></br>
                  <div className="wysiwyg">{parse(`${post.description}`)}</div>
                </div>

                {/* Comments & Form */}
                {/* <Comments /> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="blog-right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetails;
