//this is a test please work, not to be mistaken with the stuff above!!

console.log("cool, it's working");



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
  
  //2.make a  (random) choice 
  //generate a random number
  var randomNumber = Math.random()
  //round the number (to either 0 or 1) 
  var roundRandom = Math.round(randomNumber);
  console.log("roundRandom is " + roundRandom);
  //if 0 then option1 
  if (roundRandom == 0)
  {
    var choice = option1
  }
  //if 1 then option2
  else
    {
      var choice = option2
    }

  console.log("You should " + choice)  
  
  //3.display the choice
  
 // $("#message").html("You should " + choice)
  //jQuery("#message").fadeIn();
  
  //3. search for an image on flickr using the choice text as keyword(s)
  
  //perform an AJAX request to a YQL URL 
  
  var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20text%3D%22eat%20"+ choice + "%22%20and%20api_key%3D%22c2d9907497d4401657510ec287f5150d%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
  console.log(url)
  
  $.ajax(url, {success:onAjaxSuccess})
  
  return false;
  
  //return false; will prevent the app from refreshing 
}

function onAjaxSuccess(data)
{
  console.log("onAjaxSuccess")
  console.log(data)
  
  //grab the first photo from the data "scotch egg" 
  var photo = data.query.results.photo[0]
  console.log(photo)
  
  //build the image URL 
  //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  var imageUrl = "https://farm"+ photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
  console.log(imageUrl)
  
  //set the value of src to be imageUrl
  //$("img").attr("src", imageUrl)

  // set the body background-image to be imageUrl
  $('body').css('background-image', 'url(' + imageUrl + ')')
}
