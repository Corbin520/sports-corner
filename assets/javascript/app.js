
// ** Login Page **

// this will handle the input field on Submit
$("#login-button").on("click", function() {
    console.log("login button clicked")

    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();

    console.log("Loging in....")
    console.log("N: "+name,"E: "+email,"P: "+password)
})






// ** Create Account Page **

$("#ca-acct-button").on("click", function() {

    var name = $("#ca-name-input").val().trim();
    var email = $("#ca-email-input").val().trim();
    var password = $("#ca-password-input").val().trim();
    
    console.log("Account created....")
    console.log("N: "+name,"E: "+email,"P: "+password)
})








// ** HOME PAGE **

$("#test-button").on("click", function() {

    var userInput = $("#searchInput").val().trim()
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + userInput + "&key=AIzaSyC4lWI9kHf7QhSdd-cF9m59SbITCa8jZ30"



    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function(response) {

        var result = response.items
        var youtubeURL = "https://www.youtube.com/watch?v=";


        // Loop working, just increese the results to more then 1 when ready
        for (var i = 0; i < result.length; i++) {

            // get the title, 

            console.log("Image: " + result[i].snippet.thumbnails.medium.url);
            console.log("Video: " + youtubeURL + result[i].id.videoId);

            var videos = $("<iframe>");
            videos.addClass("vidAppend");
            videos.attr("width", 560);
            videos.attr("height", 315);
            videos.attr("src", "https://www.youtube.com/embed/" + result[i].id.videoId);
            videos.attr("frameborder", 0);
            $("#video").append(videos)

        }
    })
})


// Next Step: Get the videos to display on the web page