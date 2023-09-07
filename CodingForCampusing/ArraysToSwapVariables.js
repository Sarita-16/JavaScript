/*  ---------------------------------
Temporary Variable
-------------------------------    */
let swapTemVar = function (arr1) {
  let temp = arr1[0];
  arr1[0] = arr1[1];
  arr1[1] = temp;
  console.log(arr1); // [5,10]
};
swapTemVar([10, 5]);

/*  ----------------------------------
One-Line Swap
--------------------------------    */
let swap1Line = function (arr2) {
  for (let i = 0; i < arr2.length - 1; i++) {
    [arr2[i], arr2[i + 1]] = [arr2[i + 1], arr2[i]];
  }
  console.log(arr2); // [80,70,60,90]
};
swap1Line([90, 80, 70, 60]);

/*  -----------------------------------
Arithmetic Operators
---------------------------------    */
let swapArithOp = function (arr3) {
  arr3[0] = arr3[0] + arr3[1];
  arr3[1] = arr3[0] - arr3[1];
  arr3[0] = arr3[0] - arr3[1];
  console.log(arr3);
};
swapArithOp([8, 4]);

/*  -----------------------------------
XOR Bitwise operator
---------------------------------    */
let swapXOR = function (arr4) {
  arr4[0] = arr4[0] ^ arr4[1];
  arr4[1] = arr4[0] ^ arr4[1];
  arr4[0] = arr4[0] ^ arr4[1];
  console.log(arr4);
};
swapXOR([25, 50]);
