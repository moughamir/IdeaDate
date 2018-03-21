/* global riot */ /* global google */

riot.mount('item');

// Google Maps

function initMap() {
  var icon = 'assets/marker.png',
    search = document.getElementsByClassName('map-search')[0],
    searchBox = new google.maps.places.SearchBox(search),
    sands = { lat: 40.699819, lng: -73.98486120000001 },
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: sands,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
    }),
    locations = [
      ['$60', { lat: 40.699746, lng: -73.983595 }],
      ['$50', { lat: 40.699751, lng: -73.984626 }],
      ['$40', { lat: 40.699831, lng: -73.984818 }],
      ['$50', { lat: 40.700510, lng: -73.984840 }],
      ['$30', { lat: 40.700530, lng: -73.985447 }],
      ['$30', { lat: 40.698609, lng: -73.985497 }]
    ],
    image = {
      url: icon,
      size: new google.maps.Size(41, 59),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 59),
      labelOrigin: new google.maps.Point(20, 20)
    },
    marker = locations.map(loc => new google.maps.Marker({
      position: loc[1],
      label: { 
        text: loc[0],
        color: "#fff",
        fontSize: '20px'
      },
      icon: image,
      map: map
    })),
    places = null;


  map.controls[google.maps.ControlPosition.TOP_CENTER].push(search);
}
