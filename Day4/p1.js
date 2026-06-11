// 별 n개를 한 줄로 돌려줍니다.
const makeStars = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  return str;
};

console.log(makeStars(4));
