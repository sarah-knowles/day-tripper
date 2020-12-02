
import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'
//import Nav from './Nav'

import Weather from './Weather'
// import WeatherForecasts from './WeatherForecasts'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWeathers())
  }

  render () {
    // const today = this.props.weathers.shift()
    return (
      <>
      <div>
      {/* <Nav /> */}
      </div>
				<div>
					<h1>today is...</h1>
          {console.log(this.props.weathers.map(el => el))}
          <Weather/>
				</div> 
			</>
		)
	}
}

function mapStateToProps (globalState) {
  let {consolidated_weather = []} = globalState.weathers
  console.log(consolidated_weather)
  return {
    weathers: consolidated_weather
  }
}

export default connect(mapStateToProps)(App)

