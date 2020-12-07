import React from 'react';
import { connect } from 'react-redux'
// import '../../server/public/styles.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, infoWindow, InfoWindow } from 'react-google-maps';
import { fetchTrips } from '../actions'

class Map extends React.Component {
  state = {
    selectedVenue: ''
  }

  componentDidMount() {
    this.props.dispatch(fetchTrips())
  }

  gMap = () => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: - 36.848461, lng: 174.763336 }}
      >
        {this.props.tripVenue.map((venue) => (
          <Marker
            key={venue.id}
            position={{ lat: venue.location.lat, lng: venue.location.lng }}
            onClick={() => {
              this.setState({ selectedVenue: venue })
            }}
          />
        ))}

        {this.state.selectedVenue && (
          <InfoWindow
            position={{
              lat: this.state.selectedVenue.location.lat,
              lng: this.state.selectedVenue.location.lng
            }}
          >
            <div className={'infoWindow'}>
              <h2>{this.state.selectedVenue.name}</h2>
              <h2>{this.state.selectedVenue.location.formattedAddress}</h2>
            </div>

          </InfoWindow>
        )}
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
  const trips = globalState.trips
  const tripLocation = trips.map(el => el.venue.location)
  const tripLat = trips.map(el => el.venue.location.lat)
  const tripLng = trips.map(el => el.venue.location.lng)

  const tripVenue = trips.map(el => el.venue)
  const tripVenueName = trips.map(el => el.venue.name)
  console.log(tripLocation)
  return {
    tripLocation,
    tripLat,
    tripLng,
    tripVenue,
    tripVenueName
  }
}

export default connect(mapStateToProps)(Map)
