var foods = ["pancakes", "pizza", "doughnuts", "sushi", "waffles", "bacon", "tacos", "cheeseburger", "spaghetti", "cake", "cookies", "brownies", "french fries", "chicken nuggets"];

function displayGIFs() {
    var APIKey = "Fj3ngqeuQuyw4vMKcpLOLoipExrX5aJD";
    var foodTag = $(this).attr("data-food");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodTag + "&api_key=" + APIKey + "&limit=10&rating=g"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        $.each(response.data, function(i, gif) {
            var stillImageUrl = response.data[i].images.fixed_height_still.url;
            var animatedImageUrl = response.data[i].images.fixed_height.url;
            var foodContainer = $("<div>");
            var ratingDisplay = $("<span>")
            var foodImage = $("<img>");
            foodImage.addClass("gif");
            foodImage.attr("src", stillImageUrl);
            foodImage.attr("alt", foodTag);
            foodImage.attr("data-still", stillImageUrl);
            foodImage.attr("data-animated", animatedImageUrl);
            foodImage.attr("data-state", "still");
            ratingDisplay.html("<br />Rating: " + response.data[i].rating);
            foodContainer.addClass("float-left p-2");
            foodContainer.append(foodImage, ratingDisplay);
            $("#gif-display").prepend(foodContainer);
        })
    })
}

function renderFoodButtons() {
    $("#button-list").empty();

    $.each(foods, function(i, food) {
        var foodButton = $("<button>");
        foodButton.attr("data-food", food);
        foodButton.addClass("food-button btn btn-info btn-sm m-1");
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

$(document).on("click", ".food-button", displayGIFs);

renderFoodButtons();

$(document).on("click", ".gif", function() {
    state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animated");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
