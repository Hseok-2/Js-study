// 줄 번호만큼 숫자를 이어 붙인 삼각형을 돌려줍니다.
function makeNumberTriangle(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += i + 1;
    }
    result += row + "\n";
  }
  return result;
}

console.log(makeNumberTriangle(4));
