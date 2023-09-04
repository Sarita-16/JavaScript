let item = document.getElementById("result");

function checkOperation() {
  if (
    item.innerHTML.endsWith("+") ||
    item.innerHTML.endsWith("-") ||
    item.innerHTML.endsWith("*") ||
    item.innerHTML.endsWith("/")
  ) {
    return true;
  }
}

function clickZero() {
  item.innerHTML += "0";
  //console.log("clickZero : " + item.innerHTML);
}

function clickOne() {
  item.innerHTML += "1";
}

function clickSum() {
  if (item.innerHTML.length != 0 && !checkOperation()) {
    item.innerHTML += "+";
  }
}

function clickSub() {
  if (item.innerHTML.length != 0 && !checkOperation()) {
    item.innerHTML += "-";
  }
}

function clickMul() {
  if (item.innerHTML.length != 0 && !checkOperation()) {
    item.innerHTML += "*";
  }
}

function clickDiv() {
  if (item.innerHTML.length != 0 && !checkOperation()) {
    item.innerHTML += "/";
  }
}

function clickClr() {
  item.innerHTML = "";
  //console.log("clickClr : " + item.innerHTML);
}

function clickEql() {
  if (!checkOperation()) {
    if (item.innerHTML.includes("+")) {
      let eleArray = item.innerHTML.split("+");
      let sum = 0;
      for (let i = 0; i < eleArray.length; i++) {
        sum = (parseInt(sum, 2) + parseInt(eleArray[i], 2)).toString(2);
      }
      document.getElementById("result").innerHTML = sum;
    } else if (item.innerHTML.includes("-")) {
      let eleArray = item.innerHTML.split("-");
      let sub = eleArray[0] - eleArray[1];
      document.getElementById("result").innerHTML = sub;
    } else if (item.innerHTML.includes("*")) {
      let eleArray = item.innerHTML.split("*");
      let mul = eleArray[0] * eleArray[1];
      document.getElementById("result").innerHTML = mul;
    } else if (item.innerHTML.includes("/")) {
      let eleArray = item.innerHTML.split("/");
      let div = eleArray[0] / eleArray[1];
      document.getElementById("result").innerHTML = div;
    } else {
      alert("Line must end with numbers 😉");
    }
  }
}
