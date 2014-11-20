//https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true
console.log('main.js is running, no need to panic')

//Building the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1JHu9njCXmmWzMUeyeaet05_lMM09YeToqf3FHx1Tbpc" //public key
spreadsheetURL += "/1/" //sheet no.
spreadsheetURL += "public/values?alt=json" //JSON stuff

console.log(spreadsheetURL)

//Use JQuery to get a certain file from URL
//Once we have that file, do something
$.getJSON (spreadsheetURL, function(result){
    console.log(result)
    
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
    //add a marker to map
    var marker = L.marker([coffeelongitude, coffeelatitude]).addTo(map);
    marker.bindPopup(coffeeshop + "<br>" + "Rating: " + coffeerating ).openPopup();
    
    //log test
    console.log(coffeeshop + " is rated " + coffeerating)
    })
})

// Set leaflet map view to current location and zoom level
var layer = new L.StamenTileLayer("watercolor");
var map = L.map('mainmap').locate({setView: true, maxZoom: 15});
//initiate map
L.tileLayer('watercolor', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
map.addLayer(layer);

//showing location circle on map
function onLocationFound(e) {
    var radius = e.accuracy / 2;
//popup message for your location
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}
//error message when location cannot be determined
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);