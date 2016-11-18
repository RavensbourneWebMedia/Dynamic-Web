console.log('geolocate.js ready to roll!')

// from http://www.w3schools.com/html/html5_geolocation.asp

if (navigator.geolocation) // if Geolocation is supported by your browser
{
    // then call the watchPosition function, and when you have a position, call the showPosition function
    navigator.geolocation.watchPosition(showPosition)
    // showPosition is a "callback" function, which will be called at some point in the future
} 

var userMarker = null // here is where we'll store the marker for our user

function showPosition(position) 
{
    console.log(position)
    
    // extract the latitude and longitude
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    
    // create new Mapbox LngLat object
    var coordinates = new mapboxgl.LngLat( longitude, latitude)
    
    // create marker if it doesn't exist (in other words, if it's null)
    if (!userMarker)
    {
        // create a div element for the marker
        var div = document.createElement('div')
        // add a class called 'marker' to the div
        div.className = 'marker user'
        // create the custom marker
        userMarker = new mapboxgl.Marker(div)
        .setLngLat(coordinates) // set the marker position
        .addTo(map) // add the marker to map
    }
    else // otherwise just update its coordinates
    {
        userMarker.setLngLat(coordinates)
    }
}