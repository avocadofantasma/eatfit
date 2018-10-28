import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                }} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{"this.state.selectedPlace.name"}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyC6bpLtzX3U-jvhYVM_A4vgEHfcWC3LfrY")
})(MapContainer)

// export default MapContainer
// AIzaSyC6bpLtzX3U-jvhYVM_A4vgEHfcWC3LfrY

const style = {
    width: '100%',
    height: '640px'
}