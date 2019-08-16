# liri-node-app
A command line node app designed to take in user arguments, 
and provide information to them depending on what parameters they specified.
This is done in node.js using the command line to accept user arguments, make api calls inside a function, loop through the object if ncessary and parse through the commonly requested information.
Accomplished using predominantly vanilla javascript, but also Jquery in some instances to accomplish this task using the backend portion of information we've learned.

Intstructions for app:
1.) Make the call "node liri.js" in the terminal command line when you're ready to begin.
2.) Choose between the options "concert-this", "spotify-this", or "movie-this" depending on wether you want to search for a concert, song, or movie respectively.
3.) After typing in the type of search you wanted specify the name of whatever concert, song, or movie you want to find.
4.) Ta-da after the api call finds a response, it then loops through the object if necessary and displays() the the requested information in terminal.
