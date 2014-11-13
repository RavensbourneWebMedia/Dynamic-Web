// https://docs.google.com/spreadsheets/d/1zqqN_IZtpfGRRq9bQpi_SZVUp4MCjHy9VX4ttRCPMqQ/pubhtml
console.log('main.js up and running!')

// let's build the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1zqqN_IZtpfGRRq9bQpi_SZVUp4MCjHy9VX4ttRCPMqQ" // public key
spreadsheetURL += "/1/" // sheet number
spreadsheetURL += "public/values?alt=json" // this is JSON

console.log(spreadsheetURL)

// use jQuery to get a JSON file from a certain URL
// once we get that file, do something
$.getJSON(spreadsheetURL, function(result){
	console.log(result)

	var activities = result.feed.entry
	$.each(activities, function(index, activity)
	{
		console.log(activities)
		var activity = activities.gsx$activities.$t // grab the activity
		var rating = rating.gsx$ifeellazy.$t // grab the activity rating for feeling lazy
		console.log(activity + " would like to have a pet " + rating)
		var sentence = activity + " would like to have a pet " + rating
		var li = "<li>" + sentence + "</li>"
		$("ul#likes").append(li)

	})

	$("#loading").fadeOut()
})
