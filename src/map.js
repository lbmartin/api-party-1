import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './map.css'
import currentmap from './currentmap'

class map extends Component {
    state = {
        loc: ''
    }
    handleChange = (ev) => {
        const loc = ev.currentTarget.value
        this.setState({ loc })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/map/${this.state.loc}`)

    }

    render() {
        return(
      <div className="map">
        <img className="map-logo" src="https://goo.gl/images/JJKsmc" alt="map"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.loc}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit Zip Code</button>
          </div>
        </form>

        <Route exact path='/map' render={() => (
          <h3>Please enter a Zip Code for the weather</h3> 
        )} />
        <Route path='/map/:loc' component={currentmap} />
      </div>
    )
  }
}

export default map