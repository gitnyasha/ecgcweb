import React from "react";
import Link from "next/link";
import { backend, uri } from "../../pages/api/api";
import Moment from "moment";

const BlogSidebar = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    backend
      .get("/api/allposts")
      .then((response) => {
        setPosts(response.data.posts);
        console.log(response.data.posts);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget-peru-posts-thumb">
        <h3 className="widget-title">Popular Posts</h3>
        <div className="post-wrap">
          {posts.map((post) =>
            post.views > 0 ? (
              <div className="item" key={post.id}>
                <Link href={`/post/${post.slug}`}>
                  <a className="thumb">
                    <span className=" cover">
                      <img src={uri + post.image} alt="Image" />
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <span>{Moment(post.created_at).format("MMMM Do YYYY")}</span>
                  <h4 className="title usmall">
                    <Link href={`/post/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h4>
                </div>
                <div className="clear"></div>
              </div>
            ) : (
              ""
            )
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
