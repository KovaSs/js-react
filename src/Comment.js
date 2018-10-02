import React from 'react';
import PropTypes from 'prop-types';
import { comments } from './mock';

export default function Comment ({comment}) {

  
  let getComment = comments.find(item  => item.id == comment )
  
  return (
    <div>
      <b>{getComment.user}</b>
      <p>{getComment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
}