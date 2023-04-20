function login(event) {
    event.preventDefault();
    // alert("Login function called.")
    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;
    console.log(userEmail,userPassword,"check here")

    var LS = JSON.parse(localStorage.getItem("Users"));
    // console.log(LS, " - LS here")

    var flag = false;
    for (var i = 0; i < localStorage.length; i++) {
        // console.log(i, LS[i])
        // console.log(i, LS[i].userEmail, LS[i].userPassword )
        if (localStorage[i].useremail == userEmail && localStorage[i].userpassword == userPassword) {
            // alert("Email and Pass matchecd")
            flag = true;
        }
    }
    if (flag == true) {
        alert("Login successfull.")
    } else {
        alert("Credential not matched.")
    }
}