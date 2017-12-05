import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import { connect } from 'react-redux'

class ArticleList extends Accordion {
  render () {
    const {articles, filters} = this.props
    if (!articles.length) return (<h3>No Articles</h3>)

    const articleElements = articles.map((article) => {
      if (
        filters.selected &&
        !filters.selected.includes(article.id)
      ) return null
      if (
        filters.range.to && (
        Date.parse(article.date) < +filters.range.from ||
        Date.parse(article.date) > +filters.range.to )
      ) return null

      return (
        <li key={article.id}>
          <Article article={article}
                   isOpen={article.id === this.state.openItemId}
                   toggleOpen={this.toggleOpenItemMemoized(article.id)}
          />
        </li>
      )
    })

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default connect(state => ({
  articles: state.articles,
  filters: state.filters
}))(ArticleList)