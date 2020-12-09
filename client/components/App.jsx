import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'
import Weather from './Weather'
import Trips from './Trips'
import BackGroundVideo from './BackgroundVideo'
import Map from './Map'
import Nav from './Nav'
import Footer from './Footer'

export class App extends React.Component {

  componentDidMount() {
    // this.updateWeather()
  }

  componentDidUpdate(previousProps) {
    if (previousProps.weatherLocation !== this.props.weatherLocation) {
      this.updateWeather()
    }
  }

  updateWeather = () => {
    const coordinate = this.assignCoordinate()
    console.log(coordinate)
    this.props.dispatch(fetchWeathers(coordinate.woeid)) //works with the api to fetch JSON api data
  }

  assignCoordinate = () => {
    if (this.props.weatherLocation == 'Wellington') { //2351310
      return ({ woeid: 2351310 })
    } else if (this.props.weatherLocation == 'Christchurch') { //2348327
      return ({ woeid: 2348327 })
    } else if (this.props.weatherLocation == 'Melbourne') { //1103816
      return ({ woeid: 1103816 })
    } else if (this.props.weatherLocation == 'Auckland') { //2348079
      return ({ woied: 2348079 })
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
  const weatherLocation = globalState.weatherLocation
  return {
    weatherLocation
  }
}

export default connect(mapStateToProps)(App)

