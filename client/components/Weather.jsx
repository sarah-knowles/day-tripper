import React from 'react'
import {connect} from 'react-redux'

export class Weather extends React.Component{

    render(){
        return (
                <>
                <p>
                    {this.props.weathers[0].id}
                </p>
                </>

        )
    }
}
function mapStateToProps(globalState){
    let {consolidated_weather = []} = globalState.weathers
    console.log(consolidated_weather)
    return {
        weathers: consolidated_weather
      }
}
export default connect(mapStateToProps)(Weather)
