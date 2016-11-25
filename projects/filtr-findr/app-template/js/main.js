// different ways to name variables.. which one do you prefer?
// var homeGoButton
// var homegobutton
// var home_go_button
// var goBtn
// var g 

// use jQuery to select the HTML elements we're going to manipulate
// TODO wrap all these in an object, eg: var interface = { home: ... } 
var homeGoButton = $('#home button')
//var homeDropdown = $('#home select')
var skillsDropdown = $('#skills')
var petsDropdown = $('#pets')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsToggleButton = $('#results .toggle')
var resultsOL = $('#results ol')
var resultsMap = $('#map')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')


// tell the GO button to do something when we click it
homeGoButton.click( function()
{   
    // 1. capture the user chosen options
    var chosenSkill = skillsDropdown.val()
    var chosenPet = petsDropdown.val()
    console.log("You picked " + chosenSkill + " and " + chosenPet)
    
    var filters = 
    [
        {
            // favouritePet is a string, so we need a value
            key: 'favouritePet',
            value: chosenPet
        },
        {
            // chosenSkill is a number, so no need for a value
            key: chosenSkill
        }
    ]

    // 2. filter+sort people by user selections
    var resultsList = filterAndSortList(peopleList, filters)
    console.log(resultsList)

    // 3. show the results in the #results section
    showList(resultsList, resultsOL)
    addMarkers(resultsList)

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

// button to switch between list and map
resultsToggleButton.click( function() {
    
    console.log('clicked resultsToggleButton')
    
    // find out which element is currently visible
    // is the list visible?
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false
    
    console.log(isListVisible)
    
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



