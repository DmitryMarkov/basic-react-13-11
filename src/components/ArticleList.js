import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

class ArticleList extends Component {
  static propTypes () {
    return {
      articles: PropTypes.arrayOf(PropTypes.object).isRequired,
      openedArticleId: PropTypes.bool,
      toggleOpenArticle: PropTypes.func
    }
  }

  render () {
    const {openedArticleId, toggleOpenArticle} = this.props
    const articleElements = this.props.articles.map((article, index) => <li
      key={article.id}>
      <Article article={article}
               isOpen={openedArticleId === article.id}
               toggleOpen={toggleOpenArticle}
      />
    </li>)
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

export default accordeon(ArticleList)
