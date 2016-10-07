// different ways to name variables.. which one do you prefer?
// var homeGoButton
// var homegobutton
// var home_go_button
// var goBtn
// var g 

// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')


// tell the GO button to do something when we click it
homeGoButton.click( function(){
   homeSection.hide()
   resultsSection.show()
})

// tell the Back button to do something when we click it
resultsBackButton.click( function(){
   resultsSection.hide()
   homeSection.show()
})