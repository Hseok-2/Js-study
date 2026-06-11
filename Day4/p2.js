// 1부터 n까지 숫자를 공백으로 이어 붙입니다.
const makeNumberLine = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
  }
  return str;
};

console.log(makeNumberLine(4));
