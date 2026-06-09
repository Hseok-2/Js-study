function sumBetween(startValue, endValue) {
  let num1 = Number(startValue);
  let num2 = Number(endValue);

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 0;
  }

  if (num1 > num2) return 0;

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;
}

let start = "5";
let end = "1";
console.log(
  `sumBetween(${start}, ${end})의 결과는 ${sumBetween(start, end)} 입니다.`,
);
