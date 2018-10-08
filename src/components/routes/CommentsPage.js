import React from 'react'
import CommentsPagination from '../CommentsPagination'

export function CommentsPage ({match}) {
  return <CommentsPagination page={matchMedia.params.page}/>
}

export default CommentsPage
