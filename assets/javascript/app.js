console.log("JS Running...")



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
    
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + userInput + 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Result of item we are targeting
        var result = response.items[0].id.videoId
        
        // Link To video (WORKING)
        console.log("https://www.youtube.com/watch?v=" + result)


        for(var i=0; i <result.length; i++) {
            // console.log("Response: ")
            // console.log(result[i])
        }
    })
})