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
$("#show").click(function(){
  $("#time").hide("slow");
  $("#pageShow").show("slow")
});
//When clicking "enter" button, first page disappears & time demand appears