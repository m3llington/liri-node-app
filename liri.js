require("dotenv").config();
var axios = require("axios");
var request = require("request");
var fs = require("fs");
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//vars to capture user inputs.
var userOption = process.argv[2]; 
var inputParameter = process.argv.slice(3).join(" ");
var movieQuery = "";
var concertQuery = "";


// userInputs(process.argv[2], process.argv[3])



var displayConcert = function(result) {
    // console.log(result[0].venue.name);
    for (let index = 0; index < result.length; index++) {
        console.log(result[index].venue.name);
        console.log(result[index].venue.country);
        console.log(result[index].venue.region);
        console.log(result[index].venue.city);
        console.log("__________________");
    }
}
//apiCall thats the function you feed in for each api call
var apiCall= function(queryUrl) {
    
    axios.get(queryUrl).then (
        function(response) {
            if (userOption === "concert-this") {
                displayConcert(response.data);
            }else if (userOption === "movie-this") {
                displayMovie(response.data)
            }
            


        }




    )}

    switch(userOption) {
        case "concert-this":
        concertQuery = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp"
        apiCall(concertQuery);
    
    }

