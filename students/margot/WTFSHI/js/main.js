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

//new releases dvd
$.ajax(
{
  dataType: 'jsonp',
  url:"http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json?apikey=z9g8xee26dpu2j8vkfekc93q&country=uk&callback=onRTBoxOfficeSuccess"
})

function onRTBoxOfficeSuccess(data) 
{
  console.log(data)
  var randomMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log(randomMovie);
  $("#message").html("<b style='font-size:20px'> " + randomMovie.title + "</b> <br>" + randomMovie.year + "<br>" + randomMovie.synopsis + "<br> <br> <img id='poster' src='" + randomMovie.posters.original + "''>" + " <br> <a href='" + randomMovie.links.cast + "'> See cast </a>");
 
}

//similar movie function
$.ajax(
{
  dataType: 'jsonp',
  url:"http://api.rottentomatoes.com/api/public/v1.0/movies/" + randomMovie.id +"/similar.json?apikey=z9g8xee26dpu2j8vkfekc93q&callback=NayButYay"
})

function NayButYay(data)
{
  console.log(data)
  var relatedMovie = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log("related movie is" + relatedMovie);
  //$("#message2").html()
}


//top rental dvds
$.ajax(
{
  dataType: 'jsonp',
  url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?apikey=z9g8xee26dpu2j8vkfekc93q&callback=onRTdvdSuccess"
})

function onRTdvdSuccess(data) 
{
  console.log(data)
  var randomMovie2 = data.movies[Math.floor(Math.random()*data.movies.length)]

  console.log(randomMovie2);
  $("#bloup").html();
 
}

