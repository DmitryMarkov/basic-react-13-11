import React, { Component } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        <h1>App name</h1>
        <Counter/>
        <UserForm/>
        <Filters articles={this.props.articles}/>
        <ArticleList/>
      </div>
    )
  }
}

export default connect(state => ({
  articles: state.articles
}))(App)