import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'
//import Nav from './Nav'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWeathers())
  }

  render () {
    return (
      <>
      <div>
      {/* <Nav /> */}
      </div>
				<div>
					<h1>today is...</h1>
          {console.log(this.props.weathers)}
          {/* {this.props.weathers.find(weathers => <Weather key={weathers.id} weather={weather}/>)} shows today's weather
          {this.props.weathers.map(weathers => <WeatherForecast key={weathers.id} weather={weather}/>)} shows weather forecast */}
				</div>
			</>
		)
	}
}

function mapStateToProps (globalState) {
  let {consolidated_weather = ['hello']} = globalState.weathers
  console.log(consolidated_weather)
  return {
    weathers: consolidated_weather
  }
}

export default connect(mapStateToProps)(App)
