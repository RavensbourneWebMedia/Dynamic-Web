// https://docs.google.com/spreadsheets/d/1HQH71cX__PX_j9w105YZNGAy114y_mSHy1p8rK5rjUg/pubhtml
console.log('spreadsheet.js up and running!!')

//let's build the spreadsheet URL 
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1HQH71cX__PX_j9w105YZNGAy114y_mSHy1p8rK5rjUg" //public key 
spreadsheetURL += "/1/" //sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON

console.log(spreadsheetURL)


// let's define the categories
var foods = [] // empty array
var cars = []
var superheros =[]



// use jQuery to get a JSON file from a certain URL 
// once we get that file, do something
$.getJSON(spreadsheetURL, function(result)
{
	// console.log(result)

	var spreadsheetRows = result.feed.entry
	$.each(spreadsheetRows, function(index, row){

		console.log(row)

		// foods

			// let's see what the food is for this row
			var food = row.gsx$food.$t
			console.log(food)

			// if value is not empty, then push it to its category array
			if (food != "") foods.push(food)

		// next category...

			// var car = row...
			var car = row.gsx$cars.$t
			console.log(car)

			if (food != "") foods.push(car)

		// and so on	

			var superhero = row.gsx$superheros.$t
			console.log(superhero)

			if (superhero != "") superheros.push(superhero)	
	})


})

/*

food = 
[
	'Italian',
	'Chinese',
	'Indian'
]

*/