import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'
import Weather from './Weather'
import Trips from './Trips'
import BackGroundVideo from './BackgroundVideo'
import Map from './Map'
import { getSearch } from '../apis/weathers'
// import { loadClient, execute } from '../apis/google'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWeathers())
  }

  componentDidUpdate () {
    if (this.props.weathers) {
      getSearch(this.props.weathers)
    }
  }

  render () {
    return (
      <>
        <div>
          <BackGroundVideo />
          <Weather />
        </div>
        <div className='arrow'>
          <svg id="more-arrows">
            <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
          </svg>
        </div>
        <br />
        <Trips />
        <Map />
        <br />
      </>
    )
  }
}

// On page reload, scrolls to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

function mapStateToProps (globalState) {
  const { consolidated_weather = [] } = globalState.weathers
  const weatherCode = consolidated_weather.map(el => el.weather_state_abbr)[0]
  return {
    weathers: weatherCode
  }
}

export default connect(mapStateToProps)(App)
