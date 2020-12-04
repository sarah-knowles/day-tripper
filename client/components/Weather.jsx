import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions/index'
//import { fetchBackground } from '../actions/index'


export class Weather extends React.Component {
   // componentDidMount() {
    //    this.props.dispatch(fetchWeathers())
        //this.props.dispatch(fetchBackground()
    //}

    weatherCategory = () => {
        if (this.props.weatherToday == 'hc' || 's') {
            return 'cloudy'
        } else if (this.props.weatherToday == 'lc' || 'c') {
            return 'sunny'
        } else if (this.props.weatherToday == 'h' || 't' || 'hr') {
            return 'awful'
        } else console.log('Broken')
    }




    render() {
        const conditionToday = this.weatherCategory()
        return (
            <>
                <div className='centered'>
                    {/* <h1 id='weather'>
                        today is...  </h1> */}
                        <h3>{conditionToday}</h3>
                   
                </div>
            </>
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

export default connect(mapStateToProps)(Weather)
