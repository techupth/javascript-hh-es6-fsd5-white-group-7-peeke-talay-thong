let height = undefined;
let result;

const checkUndefined = (variable) => {
  return variable ?? `Height is not defined`;
};

result = checkUndefined(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
