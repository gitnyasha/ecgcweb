import React from "react";
import PageBanner from "../components/Common/PageBanner";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Link from "next/link";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import BlogPost from "../components/Common/BlogPost";

const NewsAndEvents = () => {
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
          <h2>News and Events</h2>
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
              <BlogPost />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsAndEvents;
