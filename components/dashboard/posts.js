import Table from "react-bootstrap/Table";
import axios from "axios";
import Moment from "moment";
import React from "react";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  }, []);
  const postList = posts.map((post) => (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{Moment(post.created_at).format("MMMM Do YYYY")}</td>
    </tr>
  ));
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{postList}</tbody>
    </Table>
  );
};

export default Posts;
