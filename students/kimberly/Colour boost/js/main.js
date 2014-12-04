//http://www.colourlovers.com/api/patterns/random
console.log('main.js ready!')

$("input").donetyping(function()
{
	var url = 'http://www.colourlovers.com/api/patterns/random?format=json'
	url += '&hueOption=' + $('input').val()
	url += '&jsonCallback=onPatternsSuccess'

	console.log('donetyping ' + url)

	$.ajax({
        dataType: 'jsonp',
        url: url
    })
});

function onPatternsSuccess(data) 
{
	console.log("onPatternSuccess")
	console.log(data)

	var patternURL = data[0].imageUrl

	console.log(patternURL)

	$('body').css('background-image', 'url(' + patternURL + ')')

}

function repeatHor()
{
document.body.style.backgroundRepeat="repeat-x";
}

function repeatVer()
{
document.body.style.backgroundRepeat="repeat-y";
}

$('#home form').on('submit', onHomeSubmit)
function onHomeSubmit(event)
{
	event.preventDefault()

	// show the next page
	jQuery("#needto").show();
	// hide this page
	jQuery("#home").hide();

}

//repeat with the other page
	
$('#needto form').on('submit', onNeedtoSubmit)
function onNeedtoSubmit(event)
{
	event.preventDefault()

	// show the next page
	jQuery("#time").show();
	// hide this page
	jQuery("#needto").hide();
}

$('#time form').on('submit', onTimeSubmit)
function onTimeSubmit(event)
{
	event.preventDefault()

	// show the next page
	jQuery("#clickfast").show();
	// hide this page
	jQuery("#time").hide();
}



//let's build the spreadsheet URL
var spreadsheetsURL = "https://spreadsheets.google.com/feeds/list/" 
spreadsheetsURL += "1DBU_j1HOFPQZhLSfrjllg5YyjTWEtGbFLq0FDBwMLN0" //Our public key
spreadsheetsURL += "/1/" //sheet number
spreadsheetsURL += "public/values?alt=json" //We want JSON

console.log (spreadsheetsURL)

//use jQuery to get a JSON file from a certain URL
//once we get that file, do something

$.getJSON(spreadsheetsURL, function(result)
{
	console.log('loaded spreadsheet')
	console.log(result)

	var select = $('select')

	var spreadsheetRows = result.feed.entry 
	$.each(spreadsheetRows, function (index, row)
	{
		// console.log(row)
		var need = row.gsx$need.$t   //grab the student's name
		var hex = row.gsx$hex.$t   //grab the student's animal
		console.log('need: ' + need + ' ' + hex)

		// <option name="effect" value="purple">Uplift my mood</option>
		var option = '<option name="effect" value="' + hex +'">' + need + '</option>'

		select.append(option)
		// var sentence = name + " would like to have a pet " + animal
		// var li = "<li>" + sentence + "</li>"
		// $("ul#likes").append (li)
	})

	// $("#loading").fadeOut()

})


/*var colourOptions = document.getElementsByName("effect");

for (var i = 0; i < colourOptions.length; i++)
{
	colourOptions[i].addEventListener("change", setEffect); // this doesn't seem to get triggered
} */ 

$('select').on('change', setEffect) // let's see if the select triggers a change event
$('#needto form').on('submit', setEffect) // the event should be triggerred also when we just press "Next"

function setEffect(event)
{
	console.log('setEffect', event)

	var colourValue = $('select').find(":selected").val() // found http://stackoverflow.com/questions/10659097/jquery-get-selected-option-from-dropdown
	// jquery find the select element, then find the selected option, then give us the value for it!

	$('.regular-checkbox + label').css('background-color', colourValue);
	// something like $("p").css("background-color","yellow"), found on http://www.w3schools.com/jquery/jquery_css.asp

	// document.getElementsByClassName("regular-checkbox big-checkbox").style.backgroundColor = event.target.value;
	//$(".regular-checkbox.big-checkbox") // select all the elements that have class regular-checkbox and big-checkbox
}
  
  










