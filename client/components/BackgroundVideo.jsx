import React from 'react'
import classes from './BackgroundVideo.module.css'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions/index'

export class BackgroundVideo extends React.Component {
  componentDidMount() {
    this.updateWeather()
  }

  componentDidUpdate(previousProps) {
    if (previousProps.weatherLocation !== this.props.weatherLocation) {
      this.updateWeather()
    }
  }

  updateWeather = () => {
    const coordinate = this.assignCoordinate()
    this.props.dispatch(fetchWeathers(coordinate.woeid))
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

  //Videos
  assignCondition = (weatherToday) => {
    if (weatherToday == 'hc' || weatherToday == 's') {
      return 'cloudy'
    } else if (weatherToday == 'lc' || weatherToday == 'c') {
      return 'sunny'
    } else if (weatherToday == 'h' || weatherToday == 't' || weatherToday == 'hr') {
      return 'raining'
    } else ('Broken')
  }

  assignVideo = (conditionToday) => {
    if (conditionToday == 'sunny') {
      return 'videos/sunny.mp4'
    } else if (conditionToday == 'cloudy') {
      return 'videos/video.mp4'
    } else if (conditionToday == 'raining') {
      return 'videos/rain.mp4'
    }
  }

  render() {
    const conditionToday = this.assignCondition(this.props.weatherToday)
    const videoToday = this.assignVideo(conditionToday)

    return (

      <div className={classes.Container} >
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
          <source src={videoToday} type="video/mp4" />
                    Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent} >
            <h1 style={{ marginTop: '-200px' }}>today is ...{this.props.weatherToday}</h1>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  const { consolidated_weather = [] } = globalState.weathers
  const weatherToday = consolidated_weather.map(el => el.weather_state_abbr)[0]
  const weatherLocation = globalState.weatherLocation
  return {
    weatherToday,
    weatherLocation
  }
}
export default connect(mapStateToProps)(BackgroundVideo)
