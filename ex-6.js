let height = undefined;
let result;

function checkHeight(height) {
  result = height ?? `Height is not defined`;
}

checkHeight(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
