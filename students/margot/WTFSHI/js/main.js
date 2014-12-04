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
  $("#moviepage").show("slow");
});

$.ajax(
{
  dataType: 'jsonp',
  url:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=z9g8xee26dpu2j8vkfekc93q&country=uk&callback=onRTBoxOfficeSuccess"
})

function onRTBoxOfficeSuccess(data) 
{
  console.log(data)
  var randomMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log(randomMovie);
  $("#message").html("<b style='font-size:20px'> " + randomMovie.title + "</b> <br>" + randomMovie.year + "<br>" + randomMovie.synopsis + "<br> <br> <img id='poster' src='" + randomMovie.posters.original + "''>" + " <br> <a href='" + randomMovie.links.cast + "'> See cast </a>");
 
}




