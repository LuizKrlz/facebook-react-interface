import React from "react";
import PropTypes from "prop-types";

import { Container } from "./style";

import AvatarImage from "../AvatarImage";

const Comment = ({ data }) => (
  <Container>
    <AvatarImage source={data.author.avatar} alt={data.author.name} />
    <div>
      <p>
        <strong>{data.author.name}</strong>
        {data.content}
      </p>
    </div>
  </Container>
);

Comment.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    content: PropTypes.string
  }).isRequired
};

export default Comment;
