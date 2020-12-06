import React from 'react';
import classes from './BackgroundVideo.module.css';
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
      return 'awful'
    } else console.log('Broken')
  }

  assignVideo = (conditionToday) => {
    if (conditionToday == 'lc' || 'c') {
      return 'videos/sunny.mp4'
    }
    else if (conditionToday == 'hc' || 's') { 
     return 'videos/video.mp4'}
    else if (conditionToday == 'h' || 't' || 'hr') {
        return 'https://cdn.videvo.net/videvo_files/video/free/2014-12/small_watermarked/Raindrops_Videvo_preview.webm'
    };
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
            <h1>today is...{this.props.weatherCode}</h1>
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