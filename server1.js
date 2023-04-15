function Register(event){
    // alert("funtion")
    event.preventDefault();


var data = document.getElementById("data").value;
// console.log(data,"data3 here")
var data2 = document.getElementById("data2").value;
// console.log(data2,"data3 here")
var data3 = document.getElementById("data3").value;
// console.log(data3,"data3 here")
var data4 = document.getElementById("data4").value;
// console.log(data4,"data4 here")

if (data && data2 && data3 && data4) {
    if (data3.length >=10 && data4.length >=10) {
        if (data3 == data4){
            var naval = {data: data, data2: data2, data3: data3, data4: data4};

            localStorage.setItem("user",JSON.stringify(naval))

        }else{
            console.log("password not matched")
        }
    }else {
        console.log("alteast 10 words require")
    }
}else {
    console.log("Fill the fieid")
}

function
}

