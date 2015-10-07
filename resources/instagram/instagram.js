console.log("instagram.js ready to roll")

// we use the Instagram API
// specifically, we want to get pictures data for a certaing #hashtag
// see https://instagram.com/developer/endpoints/tags/#get_tags_media_recent
var endpoint = 'https://api.instagram.com/v1/tags/'
var hashtag = 'rich'
var client_id = '0cf82e74bb504233b6357a77a3531ab8'

// let's build the URL from which data can be loaded
var URL = endpoint + hashtag + '/media/recent?client_id=' + client_id

// we're using jQuery's AJAX function to get data from Instagram
// see http://api.jquery.com/jquery.ajax
$.ajax(
{
	dataType: "jsonp", // we want JSON data, but we need to state "jsonp" here. Otherwise Instagram would refuse our request, as it comes from a different domain. If you really want to know wtf JSONP is, take a look at https://learn.jquery.com/ajax/working-with-jsonp/
	url: URL, // the url to get data from
	success: handleData // the function to execute once we get data back from Instagram
})

function handleData( json )
{
	console.log(json)
}