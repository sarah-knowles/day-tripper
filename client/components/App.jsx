import React from 'react'
import { connect } from 'react-redux'
import { fetchWeathers } from '../actions'

import Weather from './Weather'
import Trips from './Trips'
import BackGroundVideo from './BackgroundVideo'
import { loadClient, execute } from '../apis/google'


export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWeathers())
    const embedcode = `<script>
      (function() {
        var cx = '013626029654558379071:ze3tw4csia4';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
    </script>
    <gcse:search></gcse:search>`

  $('#gsearch').html(embedcode)
  //https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID&q=YOUR_QUERY
    
  }

  render () {
    // const today = this.props.weathers.shift()
    return (
      <>
    
        <div>
        <BackGroundVideo />
				
          {/* {console.log(this.props.weathers.map(el => el))} */}
          <Weather/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='arrow'>
            <svg id="more-arrows">
              <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
              <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
              <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
            </svg>
          </div>
          <br />
          <br />
          <br />
          <div id='gsearch'>
</div>
          <Trips />
          <br />
          <br />
          <br />
          <br />
          <br />
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


