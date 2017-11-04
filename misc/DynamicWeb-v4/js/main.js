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

})
