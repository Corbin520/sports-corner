
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
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + 



    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function(response) {

        var result = response.items



        var youtubeURL = "https://www.youtube.com/watch?v=";
        // var videoIdNumber = response.items[0].id.videoId;

        // var done = youtubeURL + videoIdNumber
        // console.log("done: " + done)





        for (var i = 0; i < result.length; i++) {

            console.log("")
            console.log("Video: " + youtubeURL + result[i].id.videoId)

        }


    })

})


// 1) get a response from the API onClick
// 2) dig into the response and get the data we need // also append it to the page
// 3) loop over that data to get a few of the videos we want for the page


        // creating an image with class name, id etc
        // var image = $("<image>");
        // image.addClass("images");
        // image.attr("data-name", done);
        // image.text(done);

        // // appending our data to the browser
        // $("#video-buttons").append(image);