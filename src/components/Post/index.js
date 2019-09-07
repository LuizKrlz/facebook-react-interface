import React from "react";
import { FaHeart, FaHandPointDown } from "react-icons/fa";
import PropTypes from "prop-types";

import { Author, Container, Content, Divider, Likes } from "./style";

import Comment from "../Comment";
import AvatarImage from "../AvatarImage";

const Post = ({ data }) => (
  <Container>
    <Author>
      <AvatarImage source={data.author.avatar} alt="Usuário" />
      <p>
        <strong>{data.author.name}</strong>
        <br />
        <small>{data.date}</small>
      </p>
    </Author>
    <Content>{data.content}</Content>

    <Divider />
    <div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  </Container>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  }).isRequired
};

export default Post;
