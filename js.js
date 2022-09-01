let num = document.querySelector(`.num-text`)


var count = 0;
function plus() {
    count++;
    num.innerHTML = count;
}
function minus() {
    count--;
    num.innerHTML = count;
}

function coinToss() {
    count = Math.floor(Math.random() * 500);
    num.innerHTML = count
}
function getZiro() {
    count = 0
    num.innerHTML = count
}


