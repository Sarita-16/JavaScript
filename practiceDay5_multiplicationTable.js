let multiplication = function (number) {
  if (number <= 0) {
    alert("Please enter positive number or greater than 0 😊");
  }
  while (number > 0) {
    for (let i = 1; i <= 10; i++) {
      console.log("Multiplication Table of " + number + "--->");
      let mul = i * number;
      console.log(number + " * " + i + " = " + mul);
    }
    number = number - 1;
  }
};

let table = () => {
  let number = document.getElementById("upperbound").value;

  let print = multiplication(number);

  document.getElementById("result").innerHTML = print;
};
