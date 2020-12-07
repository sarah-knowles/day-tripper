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
    let venueLat = this.props.tripLat
    let venueLng = this.props.tripLng
    console.log(venueLat[0], venueLng[0])
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: - 36.848461, lng: 174.763336 }}
      >
        {this.props.tripVenue.map((venue, i) => (
          <Marker key={venue.id} position={{ lat: venueLat[i], lng: venueLng[i] }} />
        ))}
      </GoogleMap>
    )
  }

  render() {
    const WrappedMap = withScriptjs(withGoogleMap(this.gMap));
    return (
      <>
        <div className='googlebox' style={{ width: '100vw', height: '100vh' }}>
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
  console.log(globalState.trips)
  const trips = globalState.trips
  const tripAddress = trips.map(el => el.venue.location.address)
  const tripLat = trips.map(el => el.venue.location.lat)
  const tripLng = trips.map(el => el.venue.location.lng)

  const tripVenue = trips.map(el => el.venue)
  const tripVenueName = trips.map(el => el.venue.name)
  return {
    tripAddress,
    tripLat,
    tripLng,
    tripVenue,
    tripVenueName
  }
}

export default connect(mapStateToProps)(Map)
