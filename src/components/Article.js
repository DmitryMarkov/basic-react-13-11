import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen,
      commentsShown: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
      isOpen: nextProps.defaultOpen
    })
  }

  render () {
    const {article} = this.props
    const body = this.state.isOpen && <section>{article.text}</section>
    const comments = this.state.commentsShown && <CommentList comments={article.comments} />
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h2>

        {body}

        {this.state.isOpen && article.comments &&
          <a href="#" onClick={this.showComments}>
            {this.state.commentsShown
              ? 'Hide comments'
              : `Show comments (${article.comments.length})`}
          </a>
        }

        {comments}

        <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showComments = (e) => {
    e.preventDefault()
    this.setState({
      commentsShown: !this.state.commentsShown
    })
  }
}

export default Article