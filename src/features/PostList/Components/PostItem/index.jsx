import React from "react";
import PropTypes from "prop-types";

Post.propTypes = {
  posts: PropTypes.array,
};

Post.defaultProps = {
  posts: [],
};

function Post(props) {
  const { posts } = props;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
