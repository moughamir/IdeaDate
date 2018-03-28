/* global google */
var dropDownMenu = document.querySelectorAll('.dropdown-menu');
var mobileMenu = document.querySelectorAll('.mobile-toggle');
// 
var items = [{
      "_id": "5aa97299c34ec7d5203a9740",
      "picture": "assets/items/Asiate.png",
      "name": "Asiate",
      "rating": "4.5",
      "likes": "400k"
    },
    {
      "_id": "5aa97299e2c5526afbd42a0f",
      "picture": "assets/items/BlueHill.png",
      "name": "Blue Hill",
      "rating": "5.5",
      "likes": "900k"
    },
    {
      "_id": "5aa972999f04260b08593628",
      "picture": "assets/items/JeanGeorges.png",
      "name": "Jean Georges",
      "rating": "5.5",
      "likes": "900k"
    },
    {
      "_id": "5aa972998390ef0f1d92db26",
      "picture": "assets/items/Petrossian.png",
      "name": "Petrossian",
      "rating": "4.4",
      "likes": "670"
    },
    {
      "_id": "5aa97299c99d64ec25f73bc5",
      "picture": "assets/items/AbcKitchen.png",
      "name": "ABC Kitchen",
      "rating": "3.5",
      "likes": "100k"
    },
    {
      "_id": "5aa97299a586985f307a6029",
      "picture": "assets/items/OC.png",
      "name": "OC",
      "rating": "4.5",
      "likes": "300k"
    }
  ],
  holder = document.getElementById('items');
// render items dynamicaly.
function renderItem(item) {
  var template = [
    '<article class="item">',
    '<nav class="item-slid">',
    '<div class="ico ico-md ico-prev"></div>',
    '<div class="ico ico-md ico-next"></div>',
    '</nav>',
    '<figure class="item-image">',
    '<div class="mask">',
    '<svg xmlns="http://www.w3.org/2000/svg" class="like" viewBox="0 0 30 30">',
    '<path fill="#FFF" fill-rule="evenodd" d="M8.381 1C4.312 1 1 4.31 1 8.38c0 8.74 11.921 18.8 14 20.48 2.079-1.69 14-11.75 14-20.48C29 4.31 25.688 1 21.619 1c-2.774 0-5.021 1.95-6.199 3.77-.184.29-.656.29-.84 0C13.402 2.95 11.155 1 8.381 1zM15 30a.497.497 0 0 1-.307-.1C14.094 29.43 0 18.39 0 8.38 0 3.76 3.76 0 8.381 0 11.248 0 13.599 1.78 15 3.63 16.401 1.78 18.752 0 21.619 0 26.24 0 30 3.76 30 8.38c0 10.01-14.094 21.05-14.693 21.52A.497.497 0 0 1 15 30z"/>',
    '</svg>',
    '</div>',
    '<img src="' + item.picture + '" alt="' + item.name + '">',
    '</figure>',
    '<div class="item-info">',
    '<div class="item-name">' + item.name + ' <span class="item-rating"><i class="ico ico-star"></i> ' + item.rating + '</span></div>',
    '<div class="item-likes">' + item.likes + ' likes</div>',
    '</div>',
    '</article>'
  ].join("\n");
  holder.insertAdjacentHTML('beforeend', template);
}
for (var item = 0, len = items.length; item < len; item++) {
  renderItem(items[item]);
}

// Dropdown function
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    if (dropdowns[0].classList.contains('active')) {
      dropdowns[0].classList.remove('active');
    }

  }
  else if (!event.target.matches('#dwnb')) {
    if (document.getElementById('um').classList.contains('active')) {
      document.getElementById('um').classList.remove('active');
    }

  }
  else if (!event.target.matches('#filtermenu')) {
    if (document.getElementById('filter').classList.contains('active')) {
      document.getElementById('filter').classList.remove('active');
    }
  }
};
// Toggle hamburger menu :P
[].forEach.call(document.querySelectorAll('.mobile-toggle'), function(el) {
  el.addEventListener('click', function() {
    mobileMenu[0].classList.toggle("on");
    document.querySelectorAll('.mobile-section')[0].classList.toggle("on");
  })
})

function dropMenu() {
  dropDownMenu[0].classList.toggle("active");
}

function filter() {
  document.getElementById('filter').classList.toggle("active");
}

function userMenu() {
  document.getElementById('um').classList.toggle("active");
}

// Google Maps API
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
