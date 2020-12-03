
import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'
import Video from './Video'
import Trips from './Trips'
import Weather from './Weather'


export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWeathers())
  }

  render() {
    // const today = this.props.weathers.shift()
    return (
      <>

        <Weather>
          <Video />
        </Weather>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Trips />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    )
  }
}

function mapStateToProps(globalState) {
  let { consolidated_weather = [] } = globalState.weathers
  //console.log(consolidated_weather)
  return {
    weathers: consolidated_weather
  }
}

export default connect(mapStateToProps)(App)

