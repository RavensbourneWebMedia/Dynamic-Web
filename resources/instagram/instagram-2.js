console.log("instagram.js ready to roll")

// we use the Instagram API
// specifically, we want to get pictures data for a certaing #hashtag
// see https://instagram.com/developer/endpoints/tags/#get_tags_media_recent
var endpoint = 'https://api.instagram.com/v1/tags/'
var hashtag = 'rich'
var client_id = 'YOUR_CLIENT_ID_HERE'

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

var container = $('#pictures-container')

function handleData( json )
{
	// console.log(json)

	// we store the array of pictures in a new variable
	var pictures = json.data

	// we loop through the pictures, one at a time
	for (var counter = 0; counter < pictures.length; counter = counter + 1)
	{
		var picture = pictures[counter]
		// console.log(picture)

		var imageURL = picture.images.standard_resolution.url
		var likesCount = picture.likes.count
		if (likesCount == 0) likesCount = 1
		var tagsCount = picture.tags.length
		var tagsLikesRatio = tagsCount / likesCount
		var width = 100 - tagsLikesRatio
		console.log(tagsCount, likesCount, width)

		var img = '<img src=' + imageURL + ' width=' + width +'% >'
		container.append(img)
	}
}