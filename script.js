
add = (a,b) => Number(a)+Number(b);
substract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

operate = (operator,a,b) => {
    if(operator == "+")operator=add;
    else if(operator == "-")operator=substract;
    else if(operator == "*")operator=multiply;
    else if(operator == "/")operator=divide;
    return operator(a,b)
}

let screenValue = "";
let Abuttons = document.querySelectorAll(".buttonA");
let Bbuttons = document.querySelectorAll(".buttonB");
let allButtons = document.querySelectorAll(".press");
let operator = "";
let firstNumber = "";
let secondNumber = "";
let results = [];
let times = 0;

//script for numbers
for (let i=0; i<Abuttons.length; i++){
    sum = () => {
        screenValue += Abuttons[i].textContent; 
        document.getElementById("screen2").innerHTML = screenValue;
    }     
    Abuttons[i].addEventListener("click", sum)
}

//script for operators
for(let i=0; i<4; i++){
    changeOperator = () => {
        let check = screenValue.slice(-1);
        if (check == "/" || check == "*" || check == "-" || check == "+") return;
        if (screenValue !== results[times] && screenValue !==""){}
        else if (times>0) screenValue = results[times-1]
        operator = Bbuttons[i].textContent;
        firstNumber = screenValue;
        screenValue += operator;
        document.getElementById("screen2").innerHTML = screenValue;
    }
    Bbuttons[i].addEventListener("click", changeOperator)
}

//script for "equals" button
equals = () => {
    if(screenValue == "") {}
    else secondNumber = screenValue.slice(screenValue.indexOf(operator)+1);
    results.push(operate(operator,firstNumber,secondNumber));
    document.getElementById("screen1").innerHTML = results[times];
    screenValue = "";
    firstNumber = results[times];
    times++;
}
document.getElementById("equals").addEventListener("click",equals);

//sricpt for AC 
ac = () => {
    reset();
    document.getElementById("screen2").innerHTML = 0;
    document.getElementById("screen1").innerHTML = 0;
}
document.getElementById("AC").addEventListener("click", ac);
document.getElementById("C").addEventListener("click", ac);

reset = () => {
    screenValue = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
    results = [];
    times = 0;
}

//script for DEL 
del = () => {
    if(screenValue !== ""){
        screenValue = screenValue.slice(0,-1);
        if (screenValue == "") document.getElementById("screen2").innerHTML = 0
        else document.getElementById("screen2").innerHTML = screenValue
    }
}
document.getElementById("DEL").addEventListener("click", del);

//script for pressing keys
press = (e) => {
    for (let i=0; i<allButtons.length; i++){
        if(e.key == allButtons[i].innerHTML) document.getElementById(e.key).click();
    }
    console.log(e.key)
    if (e.key == "Enter") document.getElementById("equals").click();
}
window.addEventListener("keydown", press)