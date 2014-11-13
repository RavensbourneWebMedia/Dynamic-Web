//https://docs.google.com/spreadsheets/d/1TBRpVkTzhPRTlPZr_JexswiX5vp6YBu2dVUikPyEo78/pubhtml?gid=0&single=true
console.log('main.js up and running!')

//Let's build the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1TBRpVkTzhPRTlPZr_JexswiX5vp6YBu2dVUikPyEo78" //Public key
spreadsheetURL += "/1/" //sheet number 
spreadsheetURL += "public/values?alt=json" //we want JSON!

console.log(spreadsheetURL)

//use jQuery to get a JSON file from a certain URL
//once we get that file, do something 
$.getJSON(spreadsheetURL, function(result){
	console.log(result)

	var products = result.feed.entry
	$.each(products, function(index, student)
	{
		console.log(products)
		var product = //grab the student's name
		var a =  //grab the student's animal
		console.log(name + " would like to have a pet " + animal) 
		var sentence = name + " would like to have a pet " + animal
		var li = "<li>" + sentence + "</li>"
		$("ul#likes").append(li)
		

	})

	$("#loading").fadeOut()
})
