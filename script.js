let refreshButton = document.getElementById("refresh");
let captchaCode = document.querySelector(".captchaCode");
let checkButton = document.getElementById("check");
let answer = document.getElementById("answer");
let result = document.querySelector(".result");

let key;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?';
let counter = 3;

function randomKey() {
    key = '';
    for(var i=0; i<6; i++) 
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    captchaCode.textContent = key;
}

window.onload = randomKey();

refreshButton.addEventListener("click", () => randomKey());

checkButton.addEventListener("click", () =>  {
    if(answer.value == key) {
        result.textContent = "Correct answer";
        counter = 3;
    }
    else {
        counter--;
        (counter==0) ? wait() : result.textContent = "Wrong answer. You can try "+counter+" more times"; 
    }
});

function wait() {
    var time = 30;
    refreshButton.setAttribute("disabled","");
    checkButton.setAttribute("disabled","");

    let timer = setInterval(() => {
        time--;
        result.textContent = "Please wait "+time+" seconds";
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        counter = 3;
        refreshButton.removeAttribute("disabled");
        checkButton.removeAttribute("disabled");
        result.textContent = "You can try 3 times";
    }, 30000);    
}