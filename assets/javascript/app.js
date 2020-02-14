






var apiKey = config.apiKey

// ** HOME PAGE **

$("#search-button").on("click", function() {



    var userInput = $("#searchInput").val().trim()
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=" + userInput + apiKey



    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function(response) {

        var result = response.items
        var youtubeURL = "https://www.youtube.com/watch?v=";


        // Loop working, just increese the results to more then 1 when ready
        for (var i = 0; i < result.length; i++) {

            var videos = $("<iframe>");
            videos.addClass("vidAppend");
            videos.attr("src", "https://www.youtube.com/embed/" + result[i].id.videoId);
            videos.attr("frameborder", 0);
            $("#video").append(videos)

        }
    })
})



