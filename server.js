function Login(event) {
    // alert("funtion called")
    event.preventDefault();


    // Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then
//  show user suceess

    var useremail = document.getElementById("useremail").value; 
    var userpassword = document.getElementById("userpassword").value;
    console.log (useremail, userpassword," here")

    var ls = JSON.parse(localStorage.getItem("user"));
    console.log(ls,"ls")

    var flag=false;
    for (var i=0; i < ls.length ; i++) {
        if (ls[i].useremail == useremail && ls[i].userpassword == password) {
            console.log(ls[i])
            flag = true;
        } else {
            alert("login successful.")
        }
        
        
    }
}