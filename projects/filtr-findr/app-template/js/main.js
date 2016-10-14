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


// tell the GO button to do something when we click it
homeGoButton.click( function(){   
    // capture the user chosen option
    var chosenOption = homeDropdown.val()
    console.log("You picked " + chosenOption)

    // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, chosenOption)
    console.log(resultsList)

    homeSection.hide()
    resultsSection.show()

    // show the results in the #results section
    showList(resultsList, resultsOL)
})

// tell the Back button to do something when we click it
resultsBackButton.click( function(){
   resultsSection.hide()
   homeSection.show()
})