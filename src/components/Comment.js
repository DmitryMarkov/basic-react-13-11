/**
 * Created by Dmitry Markov on 19-Nov-17.
 */
import React, { Component as C } from 'react'

class Comment extends C {
  render () {
    const {comment} = this.props
    return (
      <p>
        <b>{comment.user}</b><br />
        {comment.text}
      </p>
    )
  }
}

export default Comment
