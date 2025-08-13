console.log("Hello from calculator.js")



function fivePercent() {
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");
    
   result.value =  (amount * .5)
}

function sevenPercent(){
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");

    result.value = (amount * .8)
}

function tenPercent(){
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");

    result.value = (amount * .10)
}

function fiftysevenPercent(){
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");
    
    result.value = (amount *.57)
}