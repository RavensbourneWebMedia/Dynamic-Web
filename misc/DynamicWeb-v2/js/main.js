console.log("main.js ready to roll!")

$('#details').hide();

$('button').click( function() {
  $('#home').hide();
  $('#details').show();
})

$('#back').click( function(){
  $('#home').show();
  $('#details').hide();
});

// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button');
var homeDropdown = $('#home select');
var resultsOL = $('#results ol');

// tell the GO button to do something when we click it
homeGoButton.click( function()
{
  // get user input
  var selectedOption = homeDropdown.val();
  // using jQuery val(), see http://api.jquery.com/val
  console.log('You picked ' + selectedOption);
  var filters = [ {key:selectedOption} ]; // array of objects
   var resultsList = filterAndSortList(peopleList, filters);
   console.log(resultsList);

    // show the results in the #results section
  	showList(resultsList, resultsOL);
})
