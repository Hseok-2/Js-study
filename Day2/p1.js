function countOddNumbers(limitValue) {
  let num = Number(limitValue);

  if (!Number.isInteger(num) || num < 1) {
    return 0;
  }

  let odd = 0;

  for (let i = 1; i <= limitValue; i++) {
    if (i % 2 === 1) odd++;
  }

  return odd;
}

let test = "abc";
console.log(
  `countOddNumbers("${test}")의 결과는 ${countOddNumbers(test)} 입니다.`,
);
