import React from 'react'
import classes from './BackgroundVideo.module.css'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions/index'

export class BackgroundVideo extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWeathers())
  }

  assignCondition = () => {
    if (this.props.weatherToday == 'hc' || 's') {
      return 'cloudy'
    } else if (this.props.weatherToday == 'lc' || 'c') {
      return 'sunny'
    } else if (this.props.weatherToday == 'h' || 't' || 'hr') {
      return 'raining'
    } else console.log('Broken')
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
    const conditionToday = this.assignCondition()
    const videoToday = this.assignVideo(conditionToday)

    return (

      <div className={classes.Container} >
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
          <source src={videoToday} type="video/mp4" />
                    Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent} >
            <h1 style={{ marginTop: '-200px' }}>today is ...{this.props.weatherCode}</h1>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  const { consolidated_weather = [] } = globalState.weathers
  const weatherToday = consolidated_weather.map(el => el.weather_state_abbr)[0]
  return {
    weatherToday
  }
}

export default connect(mapStateToProps)(BackgroundVideo)
