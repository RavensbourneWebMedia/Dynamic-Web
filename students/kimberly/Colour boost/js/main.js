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












