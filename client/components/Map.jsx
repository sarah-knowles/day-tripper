import React from 'react'
import { connect } from 'react-redux'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, infoWindow, InfoWindow } from 'react-google-maps'
import { fetchTrips } from '../actions'

class Map extends React.Component {
  state = {
    selectedVenue: ''
  }

  componentDidMount () {
    this.props.dispatch(fetchTrips())
  }

  gMap = () => {
    return (

      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
      >
        {this.props.tripVenue.map((venue) => (
          <Marker
            key={venue.id}
            position={{ lat: venue.location.lat, lng: venue.location.lng }}
            onClick={(e) => {
              this.setState({ selectedVenue: venue })
              e.preventDefault()
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
            <div className='infoWindow'>
              <h2>{this.state.selectedVenue.name}</h2>
              <h2>{this.state.selectedVenue.location.formattedAddress}</h2>
            </div>

          </InfoWindow>
        )}
      </GoogleMap>
    )
  }

  render () {
    const WrappedMap = withScriptjs(withGoogleMap(this.gMap))
    return (
      <>
        <div className='googlebox' style={{ width: '100vw', height: '100vh' }}>
          <WrappedMap
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDunPsG8pzbFHQnrT4zzhyimakv2P4wwV8'}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>

        <div className="dropdown">
          <button className="dropbtn">you are in...</button>
          <div className="dropdown-content">
            <a href="" >wellington</a>
            <a href="#" >christchurch</a>
            <a href="#" >masterton</a>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  const trips = globalState.trips
  const tripVenue = trips.map(el => el.venue)

  return {
    trips,
    tripVenue
  }
}

export default connect(mapStateToProps)(Map)

// wellington lat&long - -41.28664, 174.77557
// christchurch lat&long - -43.525650, 172.639847
// masterton lat&long - -40.95972, 175.6575
// dropdown menu for different cities;
