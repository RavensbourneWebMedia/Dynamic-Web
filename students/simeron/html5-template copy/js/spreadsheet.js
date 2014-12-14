// https://docs.google.com/spreadsheets/d/1HQH71cX__PX_j9w105YZNGAy114y_mSHy1p8rK5rjUg/pubhtml
console.log('spreadsheet.js up and running!!')

//let's build the spreadsheet URL 
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1HQH71cX__PX_j9w105YZNGAy114y_mSHy1p8rK5rjUg" //public key 
spreadsheetURL += "/1/" //sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON

console.log(spreadsheetURL)

// use jQuery to get a JSON file from a certain URL 
// once we get that file, do something
$.getJSON(spreadsheetURL, function(result)
{
	// console.log(result)

	var spreadsheetRows = result.feed.entry
	$.each(spreadsheetRows, function(index, row){

		// console.log(row)

		// foods

			// let's see what the food is for this row
			var food = row.gsx$food.$t
			// console.log(food)
			// if value is not empty, then push it to its category array
			if (food != "") categories.foods.push(food)

		// next category...

			// var car = row...
			var car = row.gsx$cars.$t
			// console.log(car)
			if (car != "") categories.cars.push(car)

		// and so on	

			var superheroes = row.gsx$superheroes.$t
			// console.log(superhero)
			if (superheroes != "") categories.superheroes.push(superheroes)	

			var colour = row.gsx$colours.$t
			// console.log(colour)
			if (colour != "") categories.colours.push(colour)	

			var places = row.gsx$places.$t
			// console.log(places)
			if (places != "") categories.places.push(places)	

			var animals  = row.gsx$animals.$t
			// console.log(places)
			if (animals != "") categories.animals.push(animals)	

			var films  = row.gsx$films.$t
			// console.log(places)
			if (films != "") categories.films.push(films)	

			var drinks  = row.gsx$drinks.$t
			// console.log(places)
			if (drinks != "") categories.drinks.push(drinks)

			var random  = row.gsx$random.$t
			// console.log(places)
			if (random != "") categories.random.push(random)	
	




	
	

		// TODO places		
	})


	// console.log(colours)

})
