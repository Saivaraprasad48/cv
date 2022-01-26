let zero = document.getElementById("Head");

function btnIncreament(){
    let prev = zero.textContent;
    let updated = parseInt(prev) + 1;
    zero.textContent = updated;
}
function btnDecreament(){
    let prev = zero.textContent;
    let updated = parseInt(prev) - 1;
    zero.textContent = updated;
}
function btnReset(){
    zero.textContent = "0";
}