$('#details').hide();

$('button').click( function() {
  $('#home').hide();
  $('#details').show();
})

$('#back').click( function(){
  $('#home').show();
  $('#details').hide();
});
