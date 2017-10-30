console.log("firebase.js ready to roll!")
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    authDomain: "dynamic-web-template-e91d4.firebaseapp.com",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com",
    projectId: "dynamic-web-template-e91d4",
    storageBucket: "dynamic-web-template-e91d4.appspot.com",
    messagingSenderId: "416580094616"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var peopleDatabase = database.ref('people');
var peopleList = [];

console.log(peopleList);

peopleDatabase.on('child_added', function( firebaseObject )
{
	var person = firebaseObject.val();
  	peopleList.push(person);
  	// "push" is JavaScript's lingo for "add to a list"
})
