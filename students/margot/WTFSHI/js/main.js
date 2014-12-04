console.log("'til the end of the line")



$("#hide").click(function(){
  $("#welcome").hide("slow");
  $("#time").show("slow")
});
$("#tv").click(function(){
  $("#time").hide("slow");
  $("#pagetv").show("slow");
});
$("#movie").click(function(){
  $("#time").hide("slow");
  $("#moviepage").show("slow");
});
$("#yay").click(function(){
  $("#moviepage").hide("slow");
  $("#yaymessage").show("slow");
  $("#backtomovie").show("slow");
});
$("#save").click(function(){
  $("#moviepage").hide("slow");
  $("#saveforlater").show("slow");
  $("#backtomovie").show("slow");
});
$("#backtomovie").click(function(){
  $("#saveforlater").hide("slow");
  $("#yaymessage").hide("slow");
  $("#backtomovie").hide("slow");
  $("#message3").hide("slow");
  $("#moviepage").show("slow");
});
$("#nay").click(function(){
  $("#moviepage").hide("slow");
  $("#otherChoices").show("slow");
});
$("olderMovie").click(function(){
  $("#otherChoices").hide("slow");
  $("#moviepage").show("slow");
  //$("message'i'").html("<b style='font-size:20px'> " + refreshedMovie'i'.title + "</b> <br>" + refreshedMovie'i'.year + "<br>" + refreshedMovie'i'.synopsis + "<br> <br> <img id='poster' src='" + refreshedMovie'i'.posters.original + "''>" + " <br> <a href='" + refreshedMovie'i'.links.cast + "'> See cast </a>");
  
});



function loadNewReleases()
{
  //new releases dvd
  $.ajax(
  {
    dataType: 'jsonp',
    url:"http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json?apikey=z9g8xee26dpu2j8vkfekc93q&country=uk&page_limit=3&callback=onNewReleasesSuccess"

  })
}

loadNewReleases()


var randomMovie

function onNewReleasesSuccess(data) 
{
  console.log(data)
  randomMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log(randomMovie);
  $("#message").html("<b style='font-size:20px'> " + randomMovie.title + "</b> <br>" + randomMovie.year + "<br>" + randomMovie.synopsis + "<br> <br> <img id='poster' src='" + randomMovie.posters.original + "''>" + " <br> <a href='" + randomMovie.links.cast + "'> See cast </a>");
  
  // once we have a random movie, we can call the other function to load.
  similarMovie()
}


function similarMovie()
{
  //similar movie function
  $.ajax(
  {
    dataType: 'jsonp',
    url:"http://api.rottentomatoes.com/api/public/v1.0/movies/" + randomMovie.id +"/similar.json?apikey=z9g8xee26dpu2j8vkfekc93q&callback=NayButYay"
  })
}  

var relatedMovie

function NayButYay(data)
{
  console.log(data)
  relatedMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log("related movie is" + relatedMovie);

  
  
}

$("#naybutyay").click(function()
{
  $("#moviepage").hide("slow");
  $("#backtomovie").show("slow");
  $("#message3").show("slow");

  if (relatedMovie == undefined){
    $("#message3").html("This feature does not work for this movie, sorry!")
  }
  else{
    $("#message2").html("<b style='font-size:20px'> " + relatedMovie.title + "</b> <br>" + relatedMovie.year + "<br>" + relatedMovie.synopsis + "<br> <br> <img id='poster' src='" + relatedMovie.posters.original + "''>" + " <br> <a href='" + relatedMovie.links.cast + "'> See cast </a>")
  }
})

//top rental dvds
$.ajax(
{
  dataType: 'jsonp',
  url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?apikey=z9g8xee26dpu2j8vkfekc93q&callback=onRTdvdSuccess"
})

var refreshedMoviesArray = [] // an empty array
var refreshedMovie

function onRTdvdSuccess(data) 
{
  console.log(data)

  refreshedMoviesArray = data.movies

  refreshedMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log("refreshed movie is " + refreshedMovie.title);

  // refreshedMoviesArray.push(refreshedMovie) // adds a new movie to the array
 
}


function refresh(data){

  refreshedMovie = data.movies[Math.floor(Math.random()*data.movies.length)]


  console.log("trial" + refreshedMovie);

}



