import React from 'react';
import { connect } from 'react-redux'
// import '../../server/public/styles.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { fetchTrips } from '../actions'

class Map extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTrips())
    console.log('mounted')
  }


  gMap = () => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: - 36.848461, lng: 174.763336 }}
      />

    )
  }

  render() {
    const WrappedMap = withScriptjs(withGoogleMap(this.gMap));
    return (
      <>
        {console.log(this.props.eachTrip[0])}
        <div style={{ width: '100vw', height: '100vh' }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDunPsG8pzbFHQnrT4zzhyimakv2P4wwV8`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  const trips = globalState.trips
  const eachTrip = trips.map(el => el.venue.location.address)

  console.log(eachTrip)
  return {
    eachTrip
  }
}

export default connect(mapStateToProps)(Map)
