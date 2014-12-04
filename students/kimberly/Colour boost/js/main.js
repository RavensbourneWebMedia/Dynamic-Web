//http://www.colourlovers.com/api/palettes/random
console.log('main.js ready!')

$("input").donetyping(function()
{
	var url = 'http://www.colourlovers.com/api/palettes?format=json'
	url += '&keywords=' + $('input').val()
	url += '&jsonCallback=onPaletteSuccess'

	console.log('donetyping ' + url)

	$.ajax({
        dataType: 'jsonp',
        url: url
    })
});

function onPaletteSuccess(data) 
{
	console.log("onPaletteSuccess")
	console.log(data)

	var paletteURL = data[0].imageUrl

	console.log(paletteURL)

	$('body').css('background-image', 'url(' + paletteURL + ')')
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

var colourOptions = document.getElementsByName("effect");

for (var i = 0; i < colourOptions.length; i++)
{
	colourOptions[i].addEventListener("change", setEffect); // this doesn't seem to get triggered
}  

$('select').on('change', setEffect) // let's see if the select triggers a change event

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
  
  










