import React, { Component } from 'react'
import './currentmap.css'

class currentmap extends Component {

    state={
        forecast: {
            city: '',
            temp: '',
            humidity: '',
        }
    }

  constructor(props) {
    super(props)
    this.fetchMapData(props)
  }


  fetchMapData(props) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${props.match.params.loc},us&APPID=e0f4c1b2303a16a6428249528e1cdc67`)
      .then(response => response.json())
      .then(data => { const forecast = {
          city: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
      }
      this.setState({forecast})
  })
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchMapData(nextProps)
    }
  }



  render() {
    const { forecast } = this.state
    const degF = ((forecast.temp - 273.15) *1.8) +32;
    return (
      <div className="currentmap-zip">
        <h2>City Name: {forecast.city}</h2>
        <h3>Temperature: {degF}</h3>
        <h3>Humidity: {forecast.humidity}</h3>
      </div>
    )
  }
}

export default currentmap