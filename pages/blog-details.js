import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Comments from "../components/Blog/comments";
import { useRouter } from "next/router";
import Moment from "moment";
import { backend } from "./api/api";

const BlogDetails = () => {
  const [post, setPost] = React.useState([]);
  const router = useRouter();
  const { id: id } = router.query;
  React.useEffect(() => {
    backend
      .get(`/api/allposts/${id}`)
      .then((response) => {
        setPost(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src="/images/blog-details/blog-details.jpg"
                    alt="image"
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

                  <h3>{post.title}</h3>

                  {post.description}
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">
                        <a>
                          Next Post <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Comments & Form */}
                <Comments />
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
