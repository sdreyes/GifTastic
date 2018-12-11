var foods = ["pancakes", "pizza", "sushi", "waffles", "bacon", "tacos", "cheeseburger", "spaghetti", "cake", "cookies", "brownies", "french fries", "chicken nuggets"];

function displayGIFs() {
    var APIKey = "Fj3ngqeuQuyw4vMKcpLOLoipExrX5aJD";
    var foodTag = $(this).attr("data-food");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodTag + "&api_key=" + APIKey + "&limit=10"

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

function renderFoodButtons() {
    $("#button-list").empty();

    $.each(foods, function(i, food) {
        var foodButton = $("<button>");
        foodButton.attr("data-food", food);
        foodButton.addClass("btn btn-info btn-sm m-1");
        foodButton.text(food);
        $("#button-list").append(foodButton);
    });
}

$("#create-food-button").on("click", function() {
    event.preventDefault();
    var food = $("#food-input").val().trim();
    foods.push(food);
    renderFoodButtons();
    $("#food-input").val("");
})

renderFoodButtons();
console.log("hi");