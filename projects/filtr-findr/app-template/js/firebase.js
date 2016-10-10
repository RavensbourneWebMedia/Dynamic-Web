// initialise Firebase
var config = 
{
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"
};
firebase.initializeApp(config);

// get a reference to the database service
var database = firebase.database();