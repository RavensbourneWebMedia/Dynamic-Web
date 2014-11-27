console.log("'til the end of the line")

//$( "enter" ).on("enter", enterFunction )

//function enterFunction() {
//	var target = 
//}



//$('.block1	').click( function() {
//	var target = $(this).children(".description");
//	if ( target .css ("display") == "none") {
//		target .css ("display", "block");
//	}
//	else {
//		target .css ("display", "none");
//	}
	//});

$("#hide").click(function(){
  $("#welcome").hide("slow");
  $("#time").show("slow")
});
$("#tv").click(function(){
  $("#time").hide("slow");
  $("#pagetv").show("slow")
});
$("#movie").click(function(){
  $("#time").hide("slow");
  $("#moviepage").show("slow")
});


function pad(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
  return str;
}

$.ajax(
{
  dataType: 'jsonp',
  url:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=z9g8xee26dpu2j8vkfekc93q&country=uk&callback=onRTBoxOfficeSuccess"
})

function onRTBoxOfficeSuccess(data) 
{
  console.log(data)
  var randomMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log(randomMovie)
}


/*$.getJSON("http://www.omdbapi.com/?i=tt"+movie, function(data){
   console.log(data)
    var title = data.Title;
    var year = data.Year;
    var rating = data.imdbRating;
    var actors = data.Actors;
    var plot = data.Plot;
    var link = 'http://www.imdb.com/title/tt'+movie+'/';
    $("#title").text(title);
    $("#year").text(year);
    $("#rating").text(rating);
    $("#actors").text(actors);
    $("#plot").text(plot);
    $("#link a").attr("href", link);
    console.log(title + year);
  })
*/


