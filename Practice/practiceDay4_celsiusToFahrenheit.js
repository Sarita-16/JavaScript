let celsiusToFahrenheit = function (c) {
  let f = c * (9 / 5) + 32;
  console.log(c + " ℃ = " + f + " ℉");
  return f;
};

let submitHandler = () => {
  let celsius = document.getElementById("celsius").value;

  let result = celsiusToFahrenheit(celsius);
  document.getElementById("fahrenheit").innerHTML = result;
};
