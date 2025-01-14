import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={ this.props.addBand }/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: nameInput => dispatch({type: 'ADD_BAND', name: nameInput})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
