console.log("instagram.js ready to roll")

var endpoint = 'https://api.instagram.com/v1/tags/'
var hashtag = 'rich'
var client_id = '0cf82e74bb504233b6357a77a3531ab8'

var URL = endpoint + hashtag + '/media/recent?client_id=' + client_id

$.ajax(
{
	dataType: "jsonp",
	url: URL,
	success: handleData
})

// $.getJSON( URL, handleData);

function handleData( json )
{
	console.log(json)
}