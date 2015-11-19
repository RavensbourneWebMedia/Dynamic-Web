var Person = Parse.Object.extend("Person")

var dude = new Person()

dude.set('name', 'Jack')
dude.set('year', 1)

navigator.geolocation.watchPosition(gotPosition)

function gotPosition(position) 
{
   console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude)

   	var point = new Parse.GeoPoint(
   	{
   		latitude: position.coords.latitude, 
   		longitude: position.coords.longitude
   	})

    dude.set('position', point)

    dude.save(null, 
    {
      success: function(object)
      {
        console.log(object)
        console.log(dude.get('name') + ' is here', dude.get('position'))
      },
      error: function(object, error) 
      {
        console.error(error)
      }
    })
}