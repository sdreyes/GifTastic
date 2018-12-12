var foods = ["pancakes", "pizza", "sushi", "waffles", "bacon", "tacos", "cheeseburger"];

function displayGIFs() {
    var APIkey = "Fj3ngqeuQuyw4vMKcpLOLoipExrX5aJD";
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + APIkey + "&tag=" + food;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        
    })
}