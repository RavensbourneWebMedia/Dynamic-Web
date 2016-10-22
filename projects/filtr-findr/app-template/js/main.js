// different ways to name variables.. which one do you prefer?
// var homeGoButton
// var homegobutton
// var home_go_button
// var goBtn
// var g 

// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button')
var homeDropdown = $('#home select')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsOL = $('#results ol')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')


// tell the GO button to do something when we click it
homeGoButton.click( function()
{   
    // 1. capture the user chosen option
    var chosenOption = homeDropdown.val()
    console.log("You picked " + chosenOption)

    // 2. filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, chosenOption)
    console.log(resultsList)

    // 3. show the results in the #results section
    showList(resultsList, resultsOL)

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

// tell the other Back button to do something when we click it
detailsBackButton.click( function(){
   detailsSection.hide()
   resultsSection.show()
})