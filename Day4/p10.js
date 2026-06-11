// 테두리만 별인 정사각형을 돌려줍니다.
function makeBorderSquare(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += "*";
  }

  result += "\n";

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n; j++) {
      j === 0 || j === n - 1 ? (result += "*") : (result += " ");
    }
    result += "\n";
  }

  for (let i = 0; i < n; i++) {
    result += "*";
  }
  return result;
}

console.log(makeBorderSquare(4));
