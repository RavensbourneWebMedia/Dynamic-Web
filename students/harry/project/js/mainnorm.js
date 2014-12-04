//https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true
console.log('main.js is running, no need to panic')

//Building the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1JHu9njCXmmWzMUeyeaet05_lMM09YeToqf3FHx1Tbpc" //public key
spreadsheetURL += "/1/" //sheet no.
spreadsheetURL += "public/values?alt=json" //JSON stuff

console.log(spreadsheetURL)

//define coffee shop waypoint icon

var coffeeIcon = L.icon({
    iconUrl: 'js/img/marker.png',

    iconSize:     [30, 60], // size of the icon
    iconAnchor:   [18, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -50] // point from which the popup should open relative to the iconAnchor
});

//define your location waypoint icon
var coffeeIcon2 = L.icon({
    iconUrl: 'js/img/marker2.png',

    iconSize:     [45, 90], // size of the icon
    iconAnchor:   [22, 86], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -85] // point from which the popup should open relative to the iconAnchor
});
var shoplist = [];
//Use JQuery to get a certain file from URL
//Once we have that file, do something
$.getJSON (spreadsheetURL, function(result){
    console.log(result)
    //show location on map
    var coffeeData = result.feed.entry
    $.each(coffeeData, function(index, coffee){
    console.log(coffee)
    //get coffee shop name
    var coffeeshop = coffee.gsx$coffeeshop.$t
    console.log(coffeeshop)
    //get coffee shop rating  
    var coffeerating = coffee.gsx$rating.$t
    console.log(coffeerating)
    //get coffee shop latitude
    var coffeelatitude = coffee.gsx$latitude.$t
    console.log(coffeelatitude)
    //get coffee shop longitude
    var coffeelongitude = coffee.gsx$longitude.$t
    console.log(coffeelongitude)
    //get coffee shop loyalty
    var coffeeloyalty = coffee.gsx$loyalty.$t
    console.log(coffeeloyalty)
    //get coffee shop link
    var coffeelink = coffee.gsx$link.$t
    console.log(coffeelink)
    //get coffee shop address
    var coffeeaddress = coffee.gsx$addressline.$t
    console.log(coffeeaddress)
    //get coffee shop postcode
    var coffeepostcode = coffee.gsx$postcode.$t
    console.log(coffeepostcode)
    //get coffee shop opening
    var coffeeopeningtime = coffee.gsx$openingtime.$t
    console.log(coffeeopeningtime)
    //get coffee shop phone
    var coffeephone = coffee.gsx$phone.$t
    console.log(coffeephone)
    //get coffee shop wifi
    var coffeewifi = coffee.gsx$wifi.$t
    console.log(coffeewifi)
    //add a marker to map
    var marker = L.marker([coffeelongitude, coffeelatitude], {icon: coffeeIcon}).addTo(map);
        // Pop up info goes here
    marker.bindPopup("<a href='http://www." + coffeelink + "'><b>" + coffeeshop + "</a></b>" + "<br>" + coffeeaddress + "<br>" + coffeepostcode + "<br><br>" + "<img class='clock' src='img/clock.png'>  " +  coffeeopeningtime + "<br> <img class='phone' src='img/phone.png'>  " + "<a href='tel:" + coffeephone + "'>" + coffeephone + "</a>" + "<br> <img class='wifi' src='img/wifi.png'>  " + "Wifi: " + coffeewifi + "<br><img class='compass' src='img/compass.png'>  " + "<a href='javascript:void(0)' onclick='dirlistbut();routeTo("+ coffeelatitude + "," + coffeelongitude + ")'>Get Directions</a>");
    
    //log test
    console.log(coffeeshop + " wifi? - " + coffeerating)
    //creating shop list view array
    shoplist.push("<a href='http://www." + coffeelink + "'><b>" + coffeeshop + "</a></b>"+ "<br>" + coffeeaddress + "<br>" + coffeepostcode + "<br><br>" + "<img class='clock' src='img/clock.png'>  " +  coffeeopeningtime + "<br> <img class='phone' src='img/phone.png'>  " + "<a href='tel:" + coffeephone + "'>" + coffeephone + "</a>" + "<br> <img class='wifi' src='img/wifi.png'>  " + "Wifi: " + coffeewifi + "<br><img class='compass' src='img/compass.png'>  " + "<a href='javascript:void(0)' onclick='turnOverlayOff();dirlistbut();routeTo("+ coffeelatitude + "," + coffeelongitude + ");'>Get Directions</a><br><br>" );
    //pushing shoplist array to list div
    $('.list') .html (shoplist);
    })
})

// Set leaflet map view to current location and zoom level
var layer = new L.StamenTileLayer("watercolor");
var map = L.map('mainmap').locate({setView: true, maxZoom: 15});
    // Splash screen fade out
    $( ".logolg"  ).delay(" 3000 ") .fadeOut( "slow" );
    $( ".cover"  ).delay(" 3000 ")  .fadeOut( "slow" ); 
//initiate map
L.tileLayer('http://{s}.tiles.mapbox.com/v3/harryfo.kd15khn0/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);


//show user location function
var userLat, userLng;

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    
    userLat = e.latlng.lat;
    userLng = e.latlng.lng;

    L.marker(e.latlng,  {icon: coffeeIcon2}).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
    
    
}

map.on('locationfound', onLocationFound);

//routing to selected location
function routeTo(lat1, lng1)
{
    var lat2 = userLat, 
        lng2 = userLng
            
    L.Routing.control({
        waypoints : [
            L.latLng(lat2, lng2),
            L.latLng(lng1, lat1)
        ]
    })
    .addTo(map);
//{
    
    var listOfDirections = $('.leaflet-routing-alt').html;
    console.log (listOfDirections);
    $('.directions').empty().append(listOfDirections);
//    $('.dirlistcover') .html (listOfDirections);

}
//turn off overlay

function turnOverlayOff() {
    $('.overlay') .css ("display", "none");
    $('.settings') .css ("display", "none");
    $('.profile') .css ("display", "none");
    $('.overlayblank')  .fadeOut( "slow" );
}

//toggle settings menu button press
function turnSettingsOverlayOn() {
    $('.overlay') .css ("display", "block");
    $('.settings') .css ("display", "block");
}

//toggle profile menu button press
function turnProfileOverlayOn() {
    $('.overlay') .css ("display", "block");
    $('.profile') .css ("display", "block");
}

//toggle list menu button press
function turnOverlayBlankOn() {
    $('.overlayblank')  .fadeIn( "slow" );
}

//turn directions menu on on directions request
function dirlistbut() {
    $('.menubar2') .fadeIn( "slow");
}

//turn directions list off
function turnDirListOff() {
    $('.dirlistcover') .fadeOut( "slow");    
}

// turn on directions list cover
function dirListOn() {
    $('.dirlistcover') .fadeIn( "slow");
}
