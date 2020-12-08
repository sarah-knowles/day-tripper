import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'
import Weather from './Weather'
import Trips from './Trips'
import BackGroundVideo from './BackgroundVideo'
import Map from './Map'
import Nav from './Nav'
import Footer from './Footer'
import { getSearch } from '../apis/weathers'
// import { loadClient, execute } from '../apis/google'

export class App extends React.Component {
  state = {
    lat: '',
    lng: ''
  }
  componentDidMount() {
    this.props.dispatch(fetchWeathers(this.state.lat, this.state.lng))
  }

  componentDidUpdate() {
    if (this.props.weathers) {
      getSearch(this.props.weathers)
    }
    console.log(this.state.lat)
    this.props.dispatch(fetchWeathers(this.state.lat, this.state.lng))
  }

  assignCoordinate = () => {
    if (this.props.weatherLocation == 'Wellington') {
      this.setState({ lat: -41.28664, lng: 174.77557 })
    } else if (this.props.weatherLocation == 'Christchurch') {
      this.setState({ lat: -43.525650, lng: 172.639847 })
    } else if (this.props.weatherLocation == 'Napier') {
      this.setState({ lat: -39.48333, lng: 176.91667 })
    } else if (this.props.weatherLocation == 'Auckland') {
      this.setState({ lat: -36.848461, lng: 174.763336 })
    }
  }



  render() {
    return (
      <>
        <div>
          <BackGroundVideo />
          <Nav />
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
        <Footer />
        <br />
      </>
    )
  }
}

// On page reload, scrolls to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

function mapStateToProps(globalState) {
  const { consolidated_weather = [] } = globalState.weathers
  const weatherCode = consolidated_weather.map(el => el.weather_state_abbr)[0]
  const weatherLocation = globalState.weatherLocation
  return {
    weathers: weatherCode,
    weatherLocation
  }
}

export default connect(mapStateToProps)(App)

