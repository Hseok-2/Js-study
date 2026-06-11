// 왼쪽 정렬 역삼각형을 돌려줍니다.
function makeReverseTriangle(n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    result += row + "\n";
  }
  return result;
}

console.log(makeReverseTriangle(4));
