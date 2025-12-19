const tugmaEL = document.querySelectorAll("button");
const Tablo= document.getElementById("natija");
for (let i = 0; i < tugmaEL.length; i++ ) {
    tugmaEL[i].addEventListener("click", () => {
     const buttonValue = tugmaEL[i].textContent;
     if (buttonValue === "AC") {2
        clearResult();
     } else if (buttonValue === "=") {
        caculateResult();
     } else {
        appendValue(buttonValue);
     }
    });
}
function clearResult() {
    Tablo.value = "";
}
function caculateResult() {
    Tablo.value = eval(Tablo.value);
}
function appendValue(buttonValue) {
    Tablo.value += buttonValue;
}
