import React from 'react'

export default (OriginalComponent) => class AccordeonComponent extends React.Component {
  state = {
    openedArticleId: null
  }

  toggleOpenArticle = openedArticleId => this.setState({openedArticleId})

  render () {
    return (
      <OriginalComponent
        {...this.props}
        {...this.state}
        toggleOpenArticle={this.toggleOpenArticle}/>
    )
  }

}