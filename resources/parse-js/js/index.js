// new class
var TestObject = Parse.Object.extend('TestObject')

// new instance of such class
var testObject = new TestObject()
  
// saving data to Parse  
testObject.save({foo: 'bar'}, 
{
  success: function(object) 
  {
    console.log(object)
  },
  error: function(model, error) 
  {
    console.error(error)
  }
})

// fetching data from Parse
var query = new Parse.Query(TestObject)
query.equalTo('foo', 'bar')
query.find(
{
  success: function(results) 
  {
    console.log('Successfully retrieved ' + results.length + ' objects')
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) 
    {
      var object = results[i]
      console.log(object.id + ' - ' + object.get('foo'))
    }
  },
  error: function(error) 
  {
    console.error('Error: ' + error.code + ' ' + error.message)
  }
})