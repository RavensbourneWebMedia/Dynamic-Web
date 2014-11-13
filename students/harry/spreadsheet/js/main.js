//https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true
console.log('main.js is running, no need to panic')

//Building the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM" //public key
spreadsheetURL += "/1/" //sheet no.
spreadsheetURL += "public/values?alt=json" //JSON stuff

console.log(spreadsheetURL)

//Use JQuery to get a certain file from URL
//Once we have that file, do something
$.getJSON (spreadsheetURL, function(result){
    console.log(result)
    
    var studentsData = result.feed.entry
    $.each(studentsData, function(index, student){
    console.log(student)
    //get students name
    var studentsName = student.gsx$name.$t
    console.log(studentsName)
    //get students animal    
    var studentsAnimal = student.gsx$favouriteanimal.$t
    console.log(studentsAnimal)
    console.log(studentsName + " likes " + studentsAnimal+"s")
    var sentence = studentsName + " likes " + studentsAnimal+"s"
    var li = "<a href='https://www.google.co.uk/search?hl=en&authuser=0&site=imghp&tbm=isch&source=hp&biw=1201&bih=722&q=" + studentsAnimal +"&oq=" +studentsAnimal + "&gs_l=img'" + "<li>" + sentence + "</li>" + "</a>" + "<br>"
    $("ul#likes").append(li)
    })
    $("#loading").fadeOut()
})

//get a name 