/**
 * Created by Dmitry Markov on 19-Nov-17.
 */
import React, {Component as C} from 'react'
import Comment from './Comment'

export default class CommentList extends C {
  render () {
    const comments = this.props.comments.map((comment, index) =>
      <div key={comment.id}>
        <Comment comment={comment} />
      </div>
    )
    return (
      <div>
        <p>Comments:</p>
        {comments}
      </div>
    )
  }
}