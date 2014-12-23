console.log("It's working");



//$ is a shortcut for jQuery

//let's write a function that triggers when you click on the submit button
$("form").on("submit", doSomething)

function doSomething()
{
  console.log("form submitted!");
  
  //1.capture the user inputs
  var option1 = $("input[name=option1]").val()
  console.log("option1 seems to be " + option1);
  
  var option2 = $("input[name=option2]").val()
  console.log("option2 seems to be " + option2);
  
  var option3 = $("input[name=option3]").val()
  console.log("option3 seems to be " + option3);
  
  
  //2.make a  (random) choice 
  //generate a random number
 
  var randomNumber = Math.random()
  console.log(randomNumber);
  
  //if 0 then option1 
  if (randomNumber < 0.333)
  {
    var choice = option1
  }
  //if 1 then option2
  else if (randomNumber <0.666)
    {
      var choice = option2
    }
  
  else choice = option3
  console.log(choice)
  
  //3.display the choice
 
  
  //3. search for an image on flickr using the choice text as keyword(s)
  
  //perform an AJAX request to a YQL URL 
 
  var url = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20spotify.search.album%20where%20album%20%3D%20'" + choice + "'%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
  console.log(url)
  
  $.ajax(url, {success:onAjaxSuccess})
  
  return false;
  
  //return false; will prevent the app from refreshing 
}

function onAjaxSuccess(data)
{
  console.log("onAjaxSuccess")
  console.log(data)
  
  
  //pick a random album from the 10 searched
  var randomAlbum = Math.floor(Math.random()*11)
  console.log(randomAlbum);
  
  
  //grab the random track from the data
  var answer = data.query.results.album[randomAlbum]
  console.log(answer)
  
  var name = 
  answer.name 
  console.log(name)
  
  var artist =
      answer.artist.name
  console.log(artist)
  
  var listen =
      name + " by " + artist
  console.log(listen)
      
  $("#message").html("You should listen to " + listen)
 jQuery("#message").fadeIn();
}