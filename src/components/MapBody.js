import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class MapBody extends Component {

    state = {
        geocoder: null,
        map: null,
        infoWindow: null,
        apiLoaded: false,
        address: ''
    };

    render() {
        return (
            <div>

                <div className="uk-section">
                    <div className="uk-container">
                        <h3 className="uk-text-primary">Найдите ближайший источник чистой воды</h3>
                    </div>
                </div>

                <div className="uk-section uk-background-primary">
                    <div className="uk-container">
                        <div className="tm-map-form">
                            <div className="uk-width-1-1">
                                <input className="uk-input" type="text" placeholder="Введите ваш город" value={this.state.address} onChange={this.handleInput}/>
                            </div>
                            <button className="uk-button uk-button-primary" onClick={this.geocodeAddress}>Найти</button>
                        </div>
                    </div>
                </div>

                <div className="tm-map-holder" style={{height: '280px'}} id="map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyDsqXUXTRCHkVoWGioOxGr6LoXO8VZwpJs'}}
                    defaultCenter={{lat: 55.5815244, lng: 36.8251017}}
                    defaultZoom={14}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({map, maps}) => this.handleApiLoaded(map, maps)}
                />
                </div>

            </div>
        );
    };

    handleInput = e => {
        this.setState({address: e.target.value})
    };

    handleApiLoaded = (map, maps) => {

        var geocoder = new maps.Geocoder;
        var infoWindow = new maps.InfoWindow;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                //handle locerror
            });
        }

        const marker = new maps.Marker({position: map.getCenter(), map: map});

        this.setState({
            geocoder: geocoder,
            map: map,
            infoWindow: infoWindow,
            maps: maps,
            apiLoaded: true
        });
    };

    geocodeAddress = e => {
        const {geocoder, map, infoWindow, maps, apiLoaded, address} = this.state;

        if(!apiLoaded) return;

        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(15);
                    map.setCenter(results[0].geometry.location);
                    const marker = new maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    infoWindow.setContent(results[0].formatted_address);
                    infoWindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
}

export default MapBody;
