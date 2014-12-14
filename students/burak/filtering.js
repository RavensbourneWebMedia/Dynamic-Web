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
	// loop through the filteredProducts

	displayResults()
}

// display the results
function displayResults()
{

}

console.log(displayResults)