var foods = ["pancakes", "pizza", "sushi", "waffles", "bacon", "tacos", "cheeseburger"];

function displayGIFs() {
    var APIKey = "Fj3ngqeuQuyw4vMKcpLOLoipExrX5aJD";
    var food = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=" + APIKey + "&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var stillImageUrl = reponse.data.images.fixed_height_still.url;
        var animatedImageUrl = response.data.images.fixed_height.url;
        var foodImage = $("<img>");
        foodImage.attr("src", stillImageUrl);
        foodImage.attr("alt", food);
        foodImage.attr("data-still", stillImageUrl);
        foodImage.attr("data-animated", animatedImageUrl);
        foodImage.attr("data-state", "still");
    })
}

$("#newFoodButton").on("click", function() {

})

// on click
// var tag = this.attr