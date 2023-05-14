const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//  -------------------------------------------------------------------------------------

const toggle = document.querySelector(".toggle-input");
let isDarkMode = false;
toggle.addEventListener("change", function () {
  const calculator = document.querySelector(".calculator");
  const classes = calculator.classList;
  if (isDarkMode) {
    classes.add("dark");
  } else {
    classes.remove("dark");
  }
  isDarkMode = !isDarkMode;
});

// --------------------------------------------------------------------------------------

const compare = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
};

buttons.forEach((item) => {
  item.onclick = () => {
    debugger;
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backSpace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      if (display.innerText.includes("%")) {
        display.innerText = +display.innerText.replace("%", "") / 100;
      }
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
