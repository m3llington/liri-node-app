require("dotenv").config();

var axios = require('axios');

var movieInput = process.argv[3];

function display() {
  //Concert Call
  if (process.argv[2] === "concert-this") {
    //Name, data, time using moment
    var bandName = process.argv[3];
    var bandAPI = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    var moment = require('moment');
    moment().format();
    //Api call, getting response AFTER(then) its arrived
    axios.get(bandAPI).then(
      function (response) {
        for (var i = 0; i < response.data.length; i++) {
          event = response.data[i];
          name = event.venue.name;
          date = event.datetime;
          console.log("\nVenue: " + name + "\nLocation: " + event.venue.city + ", " + event.venue.region + "\nDate: " + date + "\n___________");
        }
      }
    );
    //Spotify Call
  } else if (process.argv[2] === "spotify-this") {

    var songName = process.argv[3];

    var Spotify = require('node-spotify-api');
    var keys = require("./keys.js");
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: songName }, function (err, data) {
      if (err) {
        console.log('Error occurred: ' + err);
        return;
      }
      songInfo = data.tracks.items;

      for (var i = 0; i < songInfo.length; i++) {
        // Loops through object
        //Possibly add a limit to how many songs show
        var album = songInfo[i].album.name;
        var name = songInfo[i].name;
        var url = songInfo[i].preview_url;
        var artist = songInfo[i].artists[0].name;
        console.log(`\nSong Title:  ${name}  \nArtist(s) Name:  ${artist}  \nAlbum Name:  ${album}  \nPreview Url:  ${url}` + "\n___________");
      };
    });
  } else if (process.argv[2] === "movie-this") //Type of search user wants
  {   //Movie Call
    axios.get("http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy").then(
      function (response) {
        // * Title of the movie.
        // * Year the movie came out.
        // * IMDB Rating of the movie.
        // * Rotten Tomatoes Rating of the movie.
        // * Country where the movie was produced.
        // * Language of the movie.
        // * Plot of the movie.
        // * Actors in the movie.
        var movieInfo = {
          title: response.data.Title,
          year: response.data.Year,
          rating: response.data.imdbRating,
          rotten: response.data.Metascore,
          country: response.data.Country,
          language: response.data.Language,
          plot: response.data.Plot,
          actors: response.data.Actors
        }

        console.log(`\nTitle:  ${movieInfo.title} \nYear: ${movieInfo.year} \nIMDB Rating: ${movieInfo.rating} \nRotten Tomatoes Rating: ${movieInfo.rotten} \nCountry: ${movieInfo.country} \nLanguage: ${movieInfo.language} \nPlot: ${movieInfo.plot} \nActors: ${movieInfo.actors}\n`);
      }
    );

  } else if (process.argv[2] === "do-what-it-says") {
    //What is says Call

    console.log("work in progress");


  };









}
display();