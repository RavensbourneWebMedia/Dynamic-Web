console.log('main.js up and running')

// let's create a few variables
var products = [] // an array (list), empty for now
var currentFilters = {}

//https://docs.google.com/spreadsheets/d/1UpRlR6gSbhk91jwsqzub9ECPg-sNVpqtZJk29OaWzPs/pubhtml?gid=0&single=true
//the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1UpRlR6gSbhk91jwsqzub9ECPg-sNVpqtZJk29OaWzPs" // public key
spreadsheetURL += "/1/" // sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON!

console.log(spreadsheetURL)

//use jQuery to get a JSON file from a certain URL
// ONCE WE GET that file, do something
$.getJSON(spreadsheetURL, function(result){
	console.log(result)

	var productSpec = result.feed.entry
	$.each(productSpec, function(index,row)
	{
		console.log(row)

        var productDataObject = {} // an object (empty)
		productDataObject.id = row.gsx$productid.$t
		productDataObject.type = row.gsx$product.$t
        productDataObject.screen = row.gsx$screensize.$t
        productDataObject.memory = row.gsx$memory.$t
        productDataObject.processor = row.gsx$processor.$t
        productDataObject.retailer = row.gsx$retailer.$t
        productDataObject.price = row.gsx$price.$t

		// console.log(product + screen + memory + processor + " is available at" + retailer + " for " + price)
		displayProduct(productDataObject)

        // populate the array of products
        // see http://www.w3schools.com/jsref/jsref_push.asp
        products.push(productDataObject)
	})

    console.log(products)

	$("#loading").fadeOut()
})

$('form').on('submit', function(e)
{
    e.preventDefault() // prevent page refresh
 
    var type = $('#type').val() // grab the value for the type criterium
    console.log(type)
    var scr = $('#scr').val() // grab the value for the type criterium
    console.log(scr)
    var mem = $('#mem').val() // grab the value for the type criterium
    console.log(mem)
    var proc = $('#processor').val() // grab the value for the type criterium
    console.log(proc)
    var text = $('#text').val() // grab the value for the type criterium
    console.log(text)
    if (text=="")
    {
    alert("Please enter price");
    } 
    else if (text<200)
    {
    alert("Not available at selected price");
    }
    else if (text <=350)
    {
    alert("PC World");
    }
    else if (text>350)
    {
    alert("John Lewis");
    }
    
    
    //var store =$(type + screen + memory + processor + text)
    //console.log(store)
    
    // loop through the products and select the ones with product.type == type  
})

// this displays product data in the UL
function displayProduct(productDataObject)
{
    var sentence = productDataObject.type + ' ' + productDataObject.screen + ' ' + productDataObject.memory + ' ' + productDataObject.processor + " is available at " + productDataObject.retailer + " for " + productDataObject.price
    var li = "<li>" + sentence + "</li>"
    $("ul#bargain").append(li)
}

// this empties the UL
function clearList()
{
   $("ul#bargain").empty()
}

// listens for a change in the #processor dropdown
// finds the selected option
// then it triggers a filter operation
$('#processor').on('change', function(event)
{
    // console.log(event)
    var selectedOption = $('#processor').find(":selected").text()
    console.log(selectedOption)

    // update the currentFilters object
    currentFilters.processor = selectedOption
    console.log(currentFilters)

    // trigger the filter operation
    filterProducts()
})

$('#mem').on('change', function(event)
{
    // console.log(event)
    var selectedOption = $('#mem').find(":selected").text()
    console.log(selectedOption)

    // update the currentFilters object
    currentFilters.memory = selectedOption
    console.log(currentFilters)

    // trigger the filter operation
    filterProducts()
})

$('#type').on('change', function(event)
{
    // console.log(event)
    var selectedOption = $('#type').find(":selected").text()
    console.log(selectedOption)

    // update the currentFilters object
    currentFilters.type = selectedOption
    console.log(currentFilters)

    // trigger the filter operation
    filterProducts()
})

$('#scr').on('change', function(event)
{
    // console.log(event)
    var selectedOption = $('#scr').find(":selected").text()
    console.log(selectedOption)

    // update the currentFilters object
    currentFilters.screen = selectedOption
    console.log(currentFilters)

    // trigger the filter operation
    filterProducts()
})

// this filters products
function filterProducts()
{
    // create a new list of filtered products
    var filteredProducts = []

    // loop through all products
    $.each(products, function(index, product)
    {
        // at the beginning we assume that a product is matching all filters
        // so we set productIsMatching to true
        // then we loop through all filters
        // if the product doesn't match any filter
        // we set productIsMatching to false
        var productIsMatching = true

        // loop through the currentFilters object
        $.each(currentFilters, function(filterName, filterValue)
        {
            // console.log(filterName + ' is ' + filterValue)
            // see what the specific value for this product is
            var productValue = product[filterName]

            console.log('we want ' + filterName + ' to be ' + filterValue + ', and ' + product.id + ' is ' + productValue)

            if (productValue != filterValue) // != means is different
            {
                productIsMatching = false
            }
        })

        // if after passing the product through all the filters
        // productIsMatching is still true
        // then we add it to the filteredProducts array
        if (productIsMatching == true)
        {
            filteredProducts.push(product)
        } 
    })
    
    // display the filtered products
    console.log(filteredProducts)

    // clear the UL
    clearList()
    // loop through filteredProducts and display each
    $.each(filteredProducts, function(index, product)
    {
        displayProduct(product)
    })
}
