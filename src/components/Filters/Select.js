import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  handleChange = selected => this.props.selectArticle(selected)

  render () {
    const {articles, selected} = this.props
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))

    return <Select
      options={options}
      value={selected}
      onChange={this.handleChange}
      multi
      simpleValue
      joinValues
    />
  }
}

export default connect(state => ({
  selected: state.filters.selected
}), {selectArticle})(SelectFilter)
