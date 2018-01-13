//google map Api
var initMap = () => {
    var uluru = { lat: 44.67776386, lng: 34.40570482 };
    var markerUluru = { lat: 44.68569746, lng: 34.39403185 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        mapTypeControl: false,
        disableDefaultUI: true
    });
    var image = 'styles/images/map_marker.svg';
    var marker = new google.maps.Marker({
      position: markerUluru,
      map: map,
      icon: image
    });

    map.setOptions({ styles: styles.forest });

};

var styles = {
    default: null,
    forest: [
        {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
        },
        {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }]
        },
        {
            featureType: 'man_made',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#bdbdbd' }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#61dac9' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#00bfa5' }]
        }
    ]
}

// global.initMap = initMap;
window.initMap = initMap;

