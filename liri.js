// require("dotenv").config();

var request = require("request");

var input1 = process.argv[2]
var input2 = process.argv[3]


function movieThis(movie){
    var myRequest = "http://www.omdbapi.com/?t=" + movie +"&y=&plot=short&apikey=trilogy"
    request(myRequest, function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("Title: ",JSON.parse(body).Title)
    console.log("Year: ",JSON.parse(body).Year)
    console.log("IMDB Rating: " + JSON.parse(body).Ratings[1].Value)
    console.log("Country: ",JSON.parse(body).Country)
    console.log("Language: ",JSON.parse(body).Language)
    console.log("Plot: ",JSON.parse(body).Plot)
    console.log("Actors: ",JSON.parse(body).Actors)

  }
});
}


switch (input1){
    case "movie-this":
        console.log("---------movie this---------")
        if(input2 !== undefined){
            movieThis(input2)
        }
        else{
            movieThis("Mr. Nobody")
        }
}