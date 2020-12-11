function getNumber(num){
var result = document.getElementById("result")
result.value += num;
}


function clearall(){
    var result = document.getElementById("result")
    result.value = "0"
}

function calculate(){
    var result = document.getElementById("result")
    result.value = eval(result.value);

}