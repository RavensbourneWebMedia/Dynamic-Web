//https://docs.google.com/spreadsheets/d/1TBRpVkTzhPRTlPZr_JexswiX5vp6YBu2dVUikPyEo78/pubhtml?gid=0&single=true
console.log('main.js up and running!')

//Let's build the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1TBRpVkTzhPRTlPZr_JexswiX5vp6YBu2dVUikPyEo78" //Public key
spreadsheetURL += "/1/" //sheet number 
spreadsheetURL += "public/values?alt=json" //we want JSON!

console.log(spreadsheetURL)

var spreadsheetRows // declare this variable outside of the $.getJSON function so that it will be accessible anywhere
var products = [] // empty array
var filteredProducts = [] // empty array

//use jQuery to get a JSON file from a certain URL
//once we get that file, do something 
$.getJSON(spreadsheetURL, function(result)
{
	// console.log(result)

	spreadsheetRows = result.feed.entry
	// console.log(spreadsheetRows)

	// loop through all rows to populate our products array
	$.each(spreadsheetRows, function(index, row)
	{
		// console.log(row)
		var product = 
		{
			name: row.gsx$name.$t,
			contains:
			{
				dairy: row.gsx$dairy.$t,
				nuts: row.gsx$nuts.$t,
				gluten: row.gsx$gluten.$t,
				raisin: row.gsx$raisin.$t,
				
				// TODO add all other allergies
			},
			moods:
			{
				dark: Number(row.gsx$darkmood.$t),
				happy: Number(row.gsx$happymood.$t),
				weird: Number(row.gsx$weirdmood.$t),
				confused :Number(row.gsx$confusedmood.$t),
				upset: Number(row.gsx$upsetmood.$t),
				 // convert to number
				// TODO add all other moods
			}
		}
		products.push(product)
	})

	console.log(products)

	$("#loading").fadeOut()
})

// function to filter products by allergies
function filterProducts()
{
	// see which options are checked
	var checkedInputs = $('#allergies input:checked')
	var filtersToCheck = []
	// loop through checked inputs to populate filtersToCheck
	checkedInputs.each(function(index, input)
	{
		// console.log(input.value)
		filtersToCheck.push(input.value)
	})
	console.log(filtersToCheck)

	if (filtersToCheck.length == 0) // if there are no filtersToCheck
	{
		filteredProducts = products // all products are eligible
	}	
	else
	{
		// loop through the products to populate the filteredProducts array
		$.each(products, function(index, product)
		{
			// console.log(product)

			// flag, we assume it's true until proven false
			var matchesAllFilters = true

			// loop through the filtersToCheck
			// to see if the product matches all of them
			$.each(filtersToCheck, function(index, filter)
			{
				// console.log(filter)
				var productContains = product.contains[filter] // yes or no
				console.log('Does ' + product.name + ' contains ' + filter + '? ' + productContains)

				if (productContains == 'yes') 
				{
					// we filter it out
					matchesAllFilters = false
				}
				else
				{
					// do nothing		
				}
			})

			// after the loop
			// if the product still matches all filters
			// we add it to the filteredProducts
			if (matchesAllFilters == true)
			{
				// we "keep" the product
				filteredProducts.push(product)
			}	
		})

		console.log(filteredProducts)

		// do we still have products, ie is filteredProducts empty?




	}	 
}

// function to rank products by mood
function rankProducts()
{
	// capture the selected moods from checkboxes
	var checkedInputs = $('#moods input:checked')
	
	var moodsToCheck = []
	// loop through checked inputs to populate moodsToCheck
	checkedInputs.each(function(index, input)
	{
		// console.log(input.value)
		moodsToCheck.push(input.value)
	})
	console.log(moodsToCheck)

	//go through the filtered products and add up the score for each product
	$.each(filteredProducts, function(index, currentProduct)
	{
		console.log(currentProduct)
		currentProduct.score=0 // reset the score to 0

		// loop through the selected moods to build up the product's score
		$.each(moodsToCheck,function(index, currentMood)
		{
			// currentProduct.moods.confused eg	
			var scoreToAdd = currentProduct.moods[currentMood]	
			currentProduct.score = currentProduct.score + scoreToAdd
		})
           console.log(currentProduct.score)
	})


	//sort the products from highest to lowest
	filteredProducts.sort(function(productA, productB){return productB.score - productA.score});  

	console.log(filteredProducts)

	displayResults()
}

// var moods = productContains[Math.floor(Math.random()*productContains.length)];

// productContains = ['chocolate'] 
// display the results
function displayResults()
{
	// do we have any products to show?
	// ie: is the length of filteredProducts bigger than 0?
	if(filteredProducts.length > 0)
	{
		// if yes, then tell people the name of the first product in the array
		var firstProductName = filteredProducts[0].name
		$("#message").html("You should eat " + firstProductName  + "!")
	}
	else
	{
		$("#message").html("There are no chocolates left in the datebase :(")
		// if not...
	}	

  	$("#message").fadeIn()
}
 // else 
 // {
 // 	display:#error
 // }




//  var array = [...];
// var newHTML = [];
// for (var i = 0; i < array.length; i++) {
//     newHTML.push('<span>' + array[i] + '</span>');
// }
// $(".element").html(newHTML.join(""));




// var object = [];
// var newHTML = [];
// for (var i = 0; i < array.length; i++) {
//     newHTML.push('<span>' + array[i] + '</span>');
// }
// $(".element").html(newHTML.join(""));


// var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// points.sort(function(a, b){return b-a});  
// console.log(points)  // Sort the numbers in the array in descending order
// The first item in the array (points[0]) is now the highest value





// $("#message").html("You should eat" + filteredProducts  + "!")
//   jQuery("#message").fadeIn()

// var array = [];
// var fourthpage = [];
// for (var i = 0; i < array.length; i++) {
//     fourthpage.push('filteredProducts' + array[i] + '</span>');
// }
// $(".element").html(fourthpage.join(""));





// var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// points.sort(function(a, b){return b-a}); 

// var checkedInputs = $('#moods input:checked')
// 	var filtersToCheck = []

// 	console.log(filtersToCheck)

// 	console.log(filteredProducts)
	

  // Sort the numbers in the array in descending orderconsole.log(filteredProducts)
  
// The first item in the array (points[0]) is now the highest value

// //function filterProducts()
// {
// 	// see which options are checked
// 	var checkedInputs = $('#moods input:checked')
// 	var _array = [1,3,2];
//     Math.max.apply(Math,_array); 10,
//     Math.min.apply(Math,_array); 0,
// 	// loop through checked inputs to populate filtersToCheck
// 	checkedInputs.each(function(index, input)
// 	{

//    }
// navigation   
	$("#go").click(function(){
	  $("#firstpage").hide();
	  $("#secondpage").show();
	});

	$("#next").click(function()
	{
	  $("#secondpage").hide();
	  $("#thirdpage").show();
	  filterProducts()
	});

	$("#next2").click(function(){
	  $("#thirdpage").hide();
	  $("#fourthpage").show();
	  rankProducts()
	});

	$("#startagain").click(function(){
		location.reload();
	  // $("#fourthpage").hide();
	  // $("#firstpage").show();
	});
