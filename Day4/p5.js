// 가로 width개, 세로 height줄인 별 사각형을 돌려줍니다.
const makeRectangle = (width, height) => {
  let result = "";
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      row += "*";
    }
    result += row + "\n";
  }
  return result;
};

console.log(makeRectangle(4, 6));
