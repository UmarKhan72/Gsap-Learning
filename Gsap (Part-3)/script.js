var  initialPath = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string")
string.addEventListener("mouseenter", function(){
    console.log("entered")
})

string.addEventListener("mouseleave", function(){
    console.log("leaved")
})