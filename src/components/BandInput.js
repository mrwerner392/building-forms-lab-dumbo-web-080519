// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  onChange = evt => {
    this.setState({
      name: evt.target.value
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.onSubmit } >
          <input type='text' name='name' value={ this.state.name } onChange={ this.onChange } />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
