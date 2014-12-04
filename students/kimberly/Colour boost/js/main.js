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










