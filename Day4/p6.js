// 왼쪽 정렬 삼각형을 돌려줍니다.
const makeTriangle = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    result += row + "\n";
  }
  return result;
};

console.log(makeTriangle(4));
