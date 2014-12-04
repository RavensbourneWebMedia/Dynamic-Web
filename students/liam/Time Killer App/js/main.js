// https://docs.google.com/spreadsheets/d/1zqqN_IZtpfGRRq9bQpi_SZVUp4MCjHy9VX4ttRCPMqQ/pubhtml
console.log('main.js up and running!')

// let's build the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1zqqN_IZtpfGRRq9bQpi_SZVUp4MCjHy9VX4ttRCPMqQ" // public key
spreadsheetURL += "/1/" // sheet number
spreadsheetURL += "public/values?alt=json" // this is JSON

console.log(spreadsheetURL)

var spreadhseetRows	// declare this variable outside of $.getJSON function so that it will be accessible anywhere
var allActivities = []
var filteredActivities = []
var filtersToCheck = 
{
	time: '',
	feeling: '',
	weather: ''
}

// use jQuery to get JSON file from a certain URL
// once we get that file do something
$.getJSON(spreadsheetURL, function(result){
	// console.log(result)

	spreadsheetRows = result.feed.entry
	// console.log(spreadsheetRows)
	$.each(spreadsheetRows, function(index, row)
	{		
 		var activity = 
		{
			name: row.gsx$activities.$t,
			time: 
			{
				lessthan5minutes : row.gsx$lessthan5minutes.$t,
				lessthan15minutes : row.gsx$lessthan15minutes.$t,
				lessthan30minutes : row.gsx$lessthan30minutes.$t,
				morethan30minutes : row.gsx$morethan30minutes.$t
				
			},
			feeling:
			{
				lazy : row.gsx$ifeellazy.$t,
				active : row.gsx$ifeelactive.$t,
				bored : row.gsx$ijustfeelbored.$t,
				dontknow : row.gsx$idontknow.$t
			},
			weather:
			{
				sunny : row.gsx$sunny.$t,
				mild : row.gsx$mild.$t,
				raining : row.gsx$raining.$t,
				snowing : row.gsx$snowing.$t
			},
			//score: 0
		}

		allActivities.push(activity)

			// 		// var rating = rating.gsx$ifeellazy.$t // grab the activity rating for feeling lazy
			   //var rating = rating.gsx$ifeellazy.$t
			// 		// console.log(activity + " would like to have a pet " + rating)
			   //console.log(activity, "gets a rating of" ,rating)
			// 		// var sentence = activity + " would like to have a pet " + rating
			// 		// var li = "<li>" + sentence + "</li>"
			// 		// $("ul#likes").append(li)


	})


	console.log(allActivities)

	// $("#loading").fadeOut()
})


// jQuery to hide page 1 and show page 2
$("#start").click(function(){
  $("#firstpage").hide();
  $("#secondpage").show();
});

// $('#lessthan5minutes').click(checkAnswer)
// $('#lessthan15minutes').click(checkAnswer)
// $('#lessthan30minutes').click(checkAnswer)

function checkAnswer(whichPage, whichFilter)
{
	// see which options are checked
	var selectedButton = $(whichPage + ' button.selected')
	filtersToCheck[whichFilter] = selectedButton.val()	 
}

// wouldnt work!
// var activity = filteredActivities[Math.floor(Math.random()*filteredActivities.length)];

// display the results
function displayResults()
{
	// var randomValue = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];	
	// $("#message").html("You should " + randomValue)
    
    shuffle(filteredActivities);

	showActivity(0)
}

var displayActivitiesCounter = 1
function displayNextResult()
{
	// showActivity(1)
	
	if (displayActivitiesCounter < filteredActivities.length)
	{
		showActivity(displayActivitiesCounter)	
	}
	else
	{
		$("#message").html("No more activities, please start again for more results")
	}	

	displayActivitiesCounter += 1 // increment the counter by one
}

function showActivity(activityNumber)
{
	console.log('showActivity ' + activityNumber)

	var activityName = filteredActivities[activityNumber].name
	$("#message").html("You should " + activityName)
 	jQuery("#message").fadeIn()
}







// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function filterActivities()
{
	// loop through the activities to populate the filteredActivities array
		$.each(allActivities, function(index, activity)
		{
			console.log(activity)

			// flag, we assume it's true until proven false
			var matchesAllFilters = true

			// loop through the filtersToCheck
			// to see if the activity matches all of them
			$.each(filtersToCheck, function(filterName, filterValue)
			{
				// console.log(filter)
				var activityFilterValue = activity[filterName][filterValue] // yes or no
				console.log('Can you ' + activity.name + ' for ' + filterValue + '? ' + activityFilterValue)

				if (activityFilterValue == 'no') 
				{
					// we filter it out
					matchesAllFilters = false
				}
				else
				{
					// do nothing		
				}
			})

			// after the loop
			// if the activity still matches all filters
			// we add it to the filteredActivities
			if (matchesAllFilters == true)
			{
				// we "keep" the activity
				filteredActivities.push(activity)
			}	
		})

		console.log(filteredActivities)

		// do we still have activities, ie is filteredActivities empty?
}


 
// jQuery to hide page 2 and show page 3
$("#buttontwo").click(function(){
  $("#secondpage").hide();
  $("#thirdpage").show();
  checkAnswer('#secondpage', 'time')
});

// jQuery to hide page 3 and show page 4
$("#buttonthree").click(function(){
  $("#thirdpage").hide();
  $("#fourthpage").show();
  checkAnswer('#thirdpage', 'feeling')
});

// jQuery to hide page 4 and show result page
$("#buttonfour").click(function(){
  $("#fourthpage").hide();
  $("#result").show();
  checkAnswer('#fourthpage', 'weather')
  filterActivities()
  displayResults()
});

// jQuery to hide result page and show page 2
$("#fromthestart").click(function(){
  $("#result").hide();
  //$("#secondpage").show();
  //console.clear();
  location.reload();
});

// jQuery to hide first result and show second result
$("#tryagain").click(function(){
  displayNextResult()
});

// jQuery to show buttonthree on click of input button
$("#lessthan5minutes").click(function(){
 $("#buttontwo").show();
});
$("#lessthan15minutes").click(function(){
 $("#buttontwo").show();
});
$("#lessthan30minutes").click(function(){
 $("#buttontwo").show();
});
$("#morethan30minutes").click(function(){
 $("#buttontwo").show();
});

// jQuery to show buttonthree on click of input button
$("#ijustfeelbored").click(function(){
 $("#buttonthree").show();
});
$("#idontknowhowifeel").click(function(){
 $("#buttonthree").show();
});
$("#ifeellazy").click(function(){
 $("#buttonthree").show();
});
$("#ifeelactive").click(function(){
 $("#buttonthree").show();
});

// jQuery to show buttonfour on click of input button
$("#raining").click(function(){
 $("#buttonfour").show();
});
$("#sunny").click(function(){
 $("#buttonfour").show();
});
$("#mild").click(function(){
 $("#buttonfour").show();
});
$("#snowing").click(function(){
 $("#buttonfour").show();
});

// jQuery to highlight button on click
// http://stackoverflow.com/questions/14032125/html-button-on-click-property-changed
$(document).ready(function(){
   $('.beforeClick').click(function(){
       $('.beforeClick').css('background-color',"#3366FF");
       $('.beforeClick').css('color',"#FFFFFF");
       $(this).removeClass('selected')

        $(this).css('background-color',"#FFFFFF");
        $(this).css('color',"#3366FF");
        $(this).addClass('selected')

   });
});

