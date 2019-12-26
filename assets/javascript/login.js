console.log("JS Running...")


// ** Login Page **

// this will handle the input field on Submit
$("#login-button").on("click", function() {
    console.log("login button clicked")

    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();

    console.log("N: "+name,"E: "+email,"P: "+password)
})

