import React from 'react'

class CommentForm extends React.Component {
  state = {
    name: '',
    text: '',
    styleName: {},
    styleText: {}
  }
  validateName = (e) => {
    const {value} = e.target
    this.setState({
      name: value.length > 100 ? this.state.name : value,
      styleName: value.length && value.length < 10
        ? { borderColor: 'red' }
        : {}
    })
  }
  validateText = (e) => {
    const {value} = e.target
    this.setState({
      text: value.length > 100 ? this.state.text : value,
      styleText: value.length && value.length < 20
        ? { borderColor: 'red' }
        : {}
    })
  }
  submit = (e) => {
    e.preventDefault()
  }
  render () {
    return (
      <form>
        <input
          type='text'
          placeholder='Enter yo name (min 10 characters)'
          size='35'
          id='name'
          name='name'
          value={this.state.name}
          onChange={this.validateName}
          style={this.state.styleName}
        /><br />
        <textarea
          placeholder='Enter comment (between 20 & 100 characters)'
          cols='55'
          rows='5'
          name='text'
          id='text'
          value={this.state.text}
          onChange={this.validateText}
          style={this.state.styleText}
        /><br />
        Characters left: {100 - this.state.text.length}<br />
        <button onClick={this.submit}>Add comment</button>
      </form>
    )
  }
}

export default CommentForm
