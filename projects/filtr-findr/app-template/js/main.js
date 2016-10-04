// use jQuery ($) to select all the interface elements we need
// storing them in variables (var) so that we don't have to re-select them (better performance, cleaner code)
var detailsSection = $('#details');
var homeSection = $('#home');
var findButton = $('button');
var backButton = $('#back');

// hide the details section by default
detailsSection.hide();

// when someone clicks on the findButton in #home...
findButton.click( function() {
  homeSection.hide();
  detailsSection.show();
})

// when someone clicks on the backButton in #details...
backButton.click( function(){   
  detailsSection.hide();
  homeSection.show();
})