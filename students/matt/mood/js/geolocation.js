function getLocation() 
{
    if (navigator.geolocation) 
    {
        console.log('getLocation running')
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else 
    { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) 
{
    console.log('cool, we haz geolocation data')
    // x.innerHTML = "Latitude: " + position.coords.latitude +     "<br>Longitude: " + position.coords.longitude; 

    var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&callback=?'

    console.log('we are about to call this weather API ' + weatherURL)

    $.getJSON(weatherURL, function(response)
    {

        // Store the wether forecast on the device's cache
        // for those offline sad  sad moments..
        localStorage.weatherCache = JSON.stringify({
            timestamp:(new Date()).getTime(),   // getTime() returns milliseconds
            data: response
        });

        console.log('here is the weather object')
        console.log(response)

        // TODO store the weather condition number in a variable that we can access elsewhere
        weatherCondition = response.list[0].weather[0].id
        console.log(weatherCondition)
        
        isWeatherLoaded = true // we're loaded!

        tryMoodPrediction()
    });
}

// run the thing without us having to click a damn button
getLocation();