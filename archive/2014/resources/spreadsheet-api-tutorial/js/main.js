// https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true
console.log('main.js up and running!')

// let's build the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/" 
spreadsheetURL += "1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM" // public key
spreadsheetURL += "/1/" // sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON!

console.log(spreadsheetURL)

// use jQuery to get a JSON file from a certain URL
// once we get that file, do something
$.getJSON(spreadsheetURL, function(result){
	console.log(result)

	var studentsData = result.feed.entry
	$.each(studentsData, function(index, student)
	{
		console.log(student)
		var name = student.gsx$name.$t // grab the student's name
		var animal = student.gsx$favouriteanimal.$t // grab the student's animal
		console.log(name + " would like to have a pet " + animal)
		var sentence = name + " would like to have a pet " + animal
		var li = "<li>" + sentence + "</li>"
		$("ul#likes").append(li)
	})

	$("#loading").fadeOut()
})