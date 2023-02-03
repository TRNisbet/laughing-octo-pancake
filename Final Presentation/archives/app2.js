console.log("linked");


var Sex = document.getElementById("Sex")
var HighBP = document.getElementById("HighBP")
var Sex = document.getElementById("Sex")
var HighBP = document.getElementById("HighBP")
var Sex = document.getElementById("Sex")
var HighBP = document.getElementById("HighBP")
var Sex = document.getElementById("Sex")
var HighBP = document.getElementById("HighBP")
var Sex = document.getElementById("Sex")
var HighBP = document.getElementById("HighBP")
var Sex = document.getElementById("Sex")
var HighBP = document.getElementById("HighBP")



var jsonBtn = document.getElementById("jsonbtn")
var jsonText = document.getElementById("jsontext")

jsonBtn.addEventListener("click", function(){
    var data = {
        "Sex":Sex.value,
        "HighBP":HighBP.value

    }
    jsonText.innerHTML = JSON.stringify(data)
            console.log(data);
})


// var firstname = document.getElementById("firstname")
// var lastname = document.getElementById("lastname")
// var jsonBtn = document.getElementById("jsonbtn")
// var jsonText = document.getElementById("jsontext")


// //add click event listener, to get data when data is entered
// jsonBtn.addEventListener("click", function(){
//     //store data in JavaScript object
//     var data = {
//         "firstName":firstname.value,
//         "lastName":lastname.value
//     }
//     //convert JavaScript object to JSON
//     jsonText.innerHTML = JSON.stringify(data)
// })