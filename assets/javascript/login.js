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

