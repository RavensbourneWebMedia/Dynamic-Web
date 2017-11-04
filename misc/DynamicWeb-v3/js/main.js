// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button')
//var homeDropdown = $('#home select')
var homeGoButton = $('#home button');
var homeDropdown = $('#home select');
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsToggleButton = $('#results .toggle')
var resultsOL = $('#results ol')
var resultsMap = $('#map')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')

// define the resultsList outside of any function
var resultsList = []

// tell the GO button to do something when we click it
homeGoButton.click( function()
{
  // get user input
  var selectedOption = homeDropdown.val();
  // using jQuery val(), see http://api.jquery.com/val
  console.log('You picked ' + selectedOption);

  var filters = [ {key:selectedOption} ]; // array of objects
  resultsList = filterAndSortList(peopleList, filters);

  	console.log(resultsList);

    // 3. show the results in the #results section
  	showList(resultsList, resultsOL);


    // 4. what happens when someone clicks on a result?
      $('#results li').click( function() {
          // grab the id from the clicked item
          var resultId = $(this).attr('id')
          // use the id to get the right data
          var resultData = resultsList[resultId]
          console.log(resultData)

          // call the function showDetails()
          showDetails(resultData, detailsInfo)

          // show the details!
          resultsSection.hide()
          detailsSection.show()
      })

      // 5. show the results!
      homeSection.hide()
      resultsSection.show()

  })

  // tell the Back button to do something when we click it
resultsBackButton.click( function(){
   resultsSection.hide()
   homeSection.show()
})

// button to switch between list and map
resultsToggleButton.click( function() {

    // console.log('clicked resultsToggleButton')

    // find out which element is currently visible
    // is the list visible?
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false

    // console.log(isListVisible)

    // if the list is visible
    if (isListVisible)
    {
        // we want to show the map and hide the list
        resultsMap.show()
        map.resize() // get the map to take all the available space
        resultsOL.hide()
        // change the button text to say "List"
    }
    else
    {
        // we want to show the list and hide the map
        resultsOL.show()
        resultsMap.hide()
        // change the button text to say "Map"
    }
})
