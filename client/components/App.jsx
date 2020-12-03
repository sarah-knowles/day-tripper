
import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'

import Weather from './Weather'
import BackgroundVideo from './BackgroundVideo'
import BackGroundVideo from './BackgroundVideo'
export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWeathers())
  }

  render () {
    // const today = this.props.weathers.shift()
    return (
      <>
    
        <div>
        <BackGroundVideo />
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
  //console.log(consolidated_weather)
  return {
    weathers: consolidated_weather
  }
}

export default connect(mapStateToProps)(App)

