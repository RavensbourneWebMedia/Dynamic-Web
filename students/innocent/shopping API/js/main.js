//https://docs.google.com/spreadsheets/d/1UpRlR6gSbhk91jwsqzub9ECPg-sNVpqtZJk29OaWzPs/pubhtml?gid=0&single=true

console.log('main.js up and running')

//the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1UpRlR6gSbhk91jwsqzub9ECPg-sNVpqtZJk29OaWzPs" // public key
spreadsheetURL += "/1/" // sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON!

console.log(spreadsheetURL)

var products=[] // list of products

//use jQuery to get a JSON file from a certain URL
// ONCE WE GET that file, do something
$.getJSON(spreadsheetURL, function(result){
	console.log(result)
    
    // looping through all spreadsheet rows
    $.each(result.feed.entry, function(index,row){
        console.log(row)
        var product=
        {
            name: row.gsx$productid.$t, 
            type: row.gsx$product.$t
            // TODO add all the other information
        }
        
        // add product to products list
        products.push(product)
    })
})

$('form').on('submit', function(e)
{
    e.preventDefault() // prevent page refresh
 
    var type = $('#type').val() // grab the value for the type criterium
    console.log(type)
    
    // loop through the products and select the ones with product.type == type
    
})

