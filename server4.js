function Register(event) {
    // alert("funtion called")
    event.preventDefault();

    var username = document.getElementById("username").value;
    // console.log(username,"username here")
    var useremail = document.getElementById("useremail").value;
    // console.log(useremail,"useremail here")
    var password = document.getElementById("password").value;
    // console.log(password,"password here")
    var confirmpassword = document.getElementById("confirmpassword").value;
    // console.log(confirmpassword,"confirmpassword here")

    if (username && useremail && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {
            if (password == confirmpassword) {
                var userdata = { username: username, useremail: useremail, userpassword: password, confirmpassword: confirmpassword};
                // console.log(userdata, "userdata here")

                

                localStorage.setItem("Users", JSON.stringify(userdata))
                // console.log(JSON.stringify)
                // Json.stingify(): convert - object into json
                // JSON.parse();  convert - JSON into Object

                // localStorage.setItem (key, value) to save into localStorage.
                // localStorage.getItem(key) to get data from localStorage.
                // localStorage.removeItem(key) to remove data from localStorage.

            } else {
                console.log("password not matched")
            }
        } else {
            console.log("password should be alteast 8 digit....  ")
        }
    } else {
        console.log("Please fill all firdlds...")
    }

}

function flex(){
    console.log(JSON.parse(localStorage.getItem("Users")))
}






