import React from 'react'
import { connect } from 'react-redux'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, infoWindow, InfoWindow } from 'react-google-maps'
import { fetchTrips, updateWeatherLocation } from '../actions'
// import { getTrips } from '../apis/googleMap'

class Map extends React.Component {
  state = {
    selectedVenue: '',
    city: 'Auckland',
    lat: -36.848461,
    lng: 174.763336
  }

  componentDidMount() {
    this.props.dispatch(fetchTrips(this.state.city))
  }

  handleChange = (e) => {
    this.setState({ city: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(fetchTrips(this.state.city))
    if (this.state.city == 'Wellington') {
      this.setState({ lat: -41.28664, lng: 174.77557 })
    } else if (this.state.city == 'Christchurch') {
      this.setState({ lat: -43.525650, lng: 172.639847 })
    } else if (this.state.city == 'Melbourne') {
      this.setState({ lat: -37.813629, lng: 144.963058 })
    } else if (this.state.city == 'Auckland') {
      this.setState({ lat: -36.848461, lng: 174.763336 })
    }
    this.props.dispatch(updateWeatherLocation(this.state.city)) //
  }


  gMap = () => {
    return (

      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
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

  render() {


    const WrappedMap = withScriptjs(withGoogleMap(this.gMap))
    return (
      <>
        <div className='googlebox' style={{ width: '100vw', height: '100vh' }}>
          <WrappedMap
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBh_FVhVkRrg3kXqR6FkWOO7K35RSzxVl4'}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="dropdown">
            <label className="dropbtn">you are in...</label>

            <select className="dropdown-content" name='citySelector' onChange={this.handleChange}>
              <option value='Auckland'>auckland</option>
              <option value='Wellington'>wellington</option>
              <option value='Christchurch'>christchurch</option>
              <option value='Melbourne'>melbourne</option>
            </select>
          </div>
          <button type='submit' className='submit'>
            submit
            </button>
        </form>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  const trips = globalState.trips
  const tripVenue = trips.map(el => el.venue)
  const weatherLocation = globalState.weatherLocation
  return {
    trips,
    tripVenue,
    weatherLocation
  }
}

export default connect(mapStateToProps)(Map)

