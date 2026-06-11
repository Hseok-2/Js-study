// 오른쪽 정렬 삼각형을 돌려줍니다.
function makeRightTriangle(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - 1 - i; j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    result += row + "\n";
  }
  return result;
}

console.log(makeRightTriangle(4));
