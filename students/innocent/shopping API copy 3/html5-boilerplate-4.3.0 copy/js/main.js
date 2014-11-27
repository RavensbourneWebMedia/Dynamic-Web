console.log('main.js up and running')

// let's create a few variables
var products = [] // an array (list), empty for now

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
 
    var prod = $('#prod').val() // grab the value for the type criterium
    console.log(prod)
    var scr = $('#scr').val() // grab the value for the type criterium
    console.log(scr)
    var mem = $('#mem').val() // grab the value for the type criterium
    console.log(mem)
    var proc = $('#proc').val() // grab the value for the type criterium
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
    var sentence = productDataObject.type + productDataObject.screen + productDataObject.memory + productDataObject.processor + " is available at" + productDataObject.retailer + " for " + productDataObject.price
    var li = "<li>" + sentence + "</li>"
    $("ul#bargain").append(li)
}
