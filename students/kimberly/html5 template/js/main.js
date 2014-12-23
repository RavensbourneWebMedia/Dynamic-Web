//https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml
console.log('main.js ready!')

//let's build the spreadsheet URL
var spreadsheetsURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetsURL += "1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM" //Our public key
spreadsheetsURL += "/1/" //sheet number
spreadsheetsURL += "public/values?alt=json" //We want JSON

console.log (spreadsheetsURL)

//use jQuery to get a JSON file from a certain URL
//once we get that file, do something

$.getJSON(spreadsheetsURL, function(result){
	console.log(result)

	var studentData = result.feed.entry 
	$.each(studentData, function (index, student){

		console.log(student)
		var name = student.gsx$name.$t   //grab the student's name
		var animal = student.gsx$favouriteanimal.$t   //grab the student's animal
		console.log(name + " would like to have a pet " + animal)
		var sentence = name + " would like to have a pet " + animal
		var li = "<li>" + sentence + "</li>"
		$("ul#likes").append (li)
	})

	$("#loading").fadeOut()

})