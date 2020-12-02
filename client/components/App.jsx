import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWeathers())
  }

  render () {
    return (
      <>
				<div>
					<h1>today is...</h1>
          {this.props.weathers.find(weathers => <Weather key={weathers.id} weather={weather}/>)} shows today's weather
          {this.props.weathers.map(weathers => <WeatherForecast key={weathers.id} weather={weather}/>)} shows weather forecast
				</div>
			</>
		)
	}
}

function mapStateToProps (globalState) {
  return {
    weathers: globalState.weathers
  }
}

export default connect(mapStateToProps)(App)
