function getPin() {
  let pinGenarate = Math.round(Math.random() * 10000) + "";
  let pin = pinGenarate;
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document.getElementById("generator").addEventListener("click", () => {
  const pinDisplay = document.getElementById("pin-display");
  pinDisplay.value = getPin();
});

document.getElementById("colculator").addEventListener("click", (e) => {
  const calcDisplay = document.getElementById("calc-display");

  if (!isNaN(e.target.innerText)) {
    calcDisplay.value += e.target.innerText;
  } else if (e.target.innerText === "C") {
    calcDisplay.value = "";
  } else if (e.target.innerText === "<") {
    calcDisplay.value = calcDisplay.value.slice(0, -1);
  }
});

document.getElementById('submit').addEventListener('click', ()=>{
    const pinDisplay = document.getElementById("pin-display");
    const calcDisplay = document.getElementById("calc-display");
    const correct = document.getElementById('correct');
    const incorrect = document.getElementById('incorrect');

    if(pinDisplay.value === calcDisplay.value){
        correct.style.display = 'block';
        incorrect.style.display = 'none';
    }else{
        incorrect.style.display = 'block';
        correct.style.display = 'none';
    }

})