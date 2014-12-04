//this is a test please work, not to be mistaken with the stuff above!!
console.log("cool, main.js s working");

//$ is a shortcut for jQuery

$('#instructionsPage button').on('click', function()
{
	$('#instructionsPage').hide()
  $('#optionsPage').show()
})

// let's define the categories
var categories = 
{
	foods: [], // empty array
	cars: [],
	superheroes: [],
	colours: [],
	places: [],
	userOptions: [],
  animals: [],
  films: [],
  random: [],
  drinks: [],


}

var questions = 
[
	'foods',
	'cars',
  'superheroes',
  'colours',
  'userOptions',
  'animals',
  'places',
  'films',
  'random',
  'drinks',
]

var questionsCount = 0
var option1 = ''
var option2 = ''
var userChoice = ''

// let's write a function that triggers when you click on the submit button
$("#optionsPage form").on("submit", onOptionsFormSubmit)

function onOptionsFormSubmit(event)
{
	event.preventDefault()

  	console.log("form submitted!");

  	//1.capture the user inputs
  	option1 = $("input[name=option1]").val()
  	console.log("option1 seems to be " + option1);
  	categories.userOptions.push(option1)
  
  	option2 = $("input[name=option2]").val()
  	console.log("option2 seems to be " + option2);
  	categories.userOptions.push(option2)

  	// hide options page
  	// show action page
  	$('#optionsPage').hide()
  	$('#actionPage').show()

  	questionsCount = 0 // reset the count, so that it starts from the first question
  	askQuestion()
}

function askQuestion()
{
  	displayRandomOptions(questionsCount)
  	questionsCount += 1;

    startTimeout();
}

// function that grabs two random options from an array 
// from http://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
function getRandomSelectionFromArray(whichArray, howMany) {
    var result = new Array(howMany),
        len = whichArray.length,
        taken = new Array(len);
    if (howMany > len)
        throw new RangeError("getRandomSelectionFromArray: more elements taken than available");
    while (howMany--) {
        var x = Math.floor(Math.random() * len);
        result[howMany] = whichArray[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}

// and displays them for a couple of seconds
function displayRandomOptions(index)
{
	// which category?
	var categoryArray = categories[questions[index]]
  console.log(categoryArray)
	var randomOptions = getRandomSelectionFromArray(categoryArray,2)

	$('#option1').html(randomOptions[0]) // the first option
	$('#option2').html(randomOptions[1]) // the second option

}

var questionTimeout

function startTimeout()
{
  questionTimeout = setTimeout(function()
  { 
    // alert("Your too slow guess again"); 
    $('#slow-alert').fadeIn()
  }, 5000)
}

function stopTimeout()
{

    clearTimeout(questionTimeout);
    $("#slow-alert").hide()
  // use your google powers to fill this in
}

$('#option1').on('click', onOptionClick)
$('#option2').on('click', onOptionClick)

function onOptionClick(event)
{
	console.log(event.currentTarget.innerHTML)
  var clicked = event.currentTarget.innerHTML
  if (clicked == option1 || clicked == option2) // "||" means or and the "==" means comparing two values and checking if they are the same. 
  {
    userChoice = clicked
  }

  // change background colour
  changeBackgroundColour()

  // stop the timeout
  stopTimeout()
	
	// store the user's answer
	// use a variable

	// are there still questions to ask?
	// or did we run out of questions
	if (questionsCount >= questions.length)
	{
		// we're at the end of the quiz

    // hide the action section
    // show the answer section
    $('#actionPage').hide()
    $('#answerPage').show()

		// display user's choice
		displayUserChoice() 
	}	
	else
	{
		askQuestion()
	}
}

function changeBackgroundColour()
{
  // generate 3 random numbers between 0 and 255 for the RGB values
  var red = Math.round( Math.random() * 255 )
  var green = Math.round( Math.random() *255 )
  var blue = Math.round( Math.random() *255 )

  var rgba = 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.3)'

  console.log('changeBackgroundColour',red,green,blue, rgba)

  // rgba(123, 213, 0, 0.4)
  $("body").css('background-color', rgba)
}


function displayUserChoice()
{
	$("#answer").html("your answer is.." + userChoice)
}



































/*  	





  
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

*/
