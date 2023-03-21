// Create a calculator using Switch Statement : + - * /
let calculator = function (a, b, operation) {
  let c;
  switch (operation) {
    case "+":
      c = a + b;
      console.log("Addition of 2 elements : " + c);
      break;

    case "-":
      c = a - b;
      console.log("Subtraction of 2 elements : " + c);
      break;

    case "*":
      c = a * b;
      console.log("Multiplication of 2 elements : " + c);
      break;

    case "/":
      c = a / b;
      console.log("Division of 2 elements : " + c);
      break;

    default:
      console.log("Enter valid operation. ");
      break;
  }
  return c;
};

let submitHandler = () => {
  console.log("Button Click");
  let fName = document.getElementById("firstName").value;
  let sName = document.getElementById("secondName").value;
  let operation = document.getElementById("operation").value;
  console.log("test - ", fName, sName, operation);

  let result = calculator(+fName, +sName, operation);
  document.getElementById("result").innerHTML = result;
};
