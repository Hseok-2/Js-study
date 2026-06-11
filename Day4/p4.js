// n줄, 각 줄에 별 n개인 정사각형을 돌려줍니다.
const makeSquare = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    result += row + "\n";
  }
  return result;
};

console.log(makeSquare(3));
